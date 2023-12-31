package search

import (
	"errors"
	"math"
	"net/url"
	"strconv"

	"github.com/pocketbase/dbx"
)

// DefaultPerPage specifies the default returned search result items.
const DefaultPerPage int = 30

// MaxPerPage specifies the maximum allowed search result items returned in a single page.
const MaxPerPage int = 500

// url search query params
const (
	PageQueryParam    string = "page"
	PerPageQueryParam string = "perPage"
	SortQueryParam    string = "sort"
	FilterQueryParam  string = "filter"
)

// Result defines the returned search result structure.
type Result struct {
	Page       int `json:"page"`
	PerPage    int `json:"perPage"`
	TotalItems int `json:"totalItems"`
	TotalPages int `json:"totalPages"`
	Items      any `json:"items"`
}

// Provider represents a single configured search provider instance.
type Provider struct {
	fieldResolver FieldResolver
	query         *dbx.SelectQuery
	countCol      string
	page          int
	perPage       int
	sort          []SortField
	filter        []FilterData
}

// NewProvider creates and returns a new search provider.
//
// Example:
//
//	baseQuery := db.Select("*").From("user")
//	fieldResolver := search.NewSimpleFieldResolver("id", "name")
//	models := []*YourDataStruct{}
//
//	result, err := search.NewProvider(fieldResolver).
//		Query(baseQuery).
//		ParseAndExec("page=2&filter=id>0&sort=-email", &models)
func NewProvider(fieldResolver FieldResolver) *Provider {
	return &Provider{
		fieldResolver: fieldResolver,
		countCol:      "_rowid_",
		page:          1,
		perPage:       DefaultPerPage,
		sort:          []SortField{},
		filter:        []FilterData{},
	}
}

// Query sets the base query that will be used to fetch the search items.
func (s *Provider) Query(query *dbx.SelectQuery) *Provider {
	s.query = query
	return s
}

// CountCol allows changing the default column (_rowid_) that is used
// to generated the COUNT SQL query statement.
func (s *Provider) CountCol(name string) *Provider {
	s.countCol = name
	return s
}

// Page sets the `page` field of the current search provider.
//
// Normalization on the `page` value is done during `Exec()`.
func (s *Provider) Page(page int) *Provider {
	s.page = page
	return s
}

// PerPage sets the `perPage` field of the current search provider.
//
// Normalization on the `perPage` value is done during `Exec()`.
func (s *Provider) PerPage(perPage int) *Provider {
	s.perPage = perPage
	return s
}

// Sort sets the `sort` field of the current search provider.
func (s *Provider) Sort(sort []SortField) *Provider {
	s.sort = sort
	return s
}

// AddSort appends the provided SortField to the existing provider's sort field.
func (s *Provider) AddSort(field SortField) *Provider {
	s.sort = append(s.sort, field)
	return s
}

// Filter sets the `filter` field of the current search provider.
func (s *Provider) Filter(filter []FilterData) *Provider {
	s.filter = filter
	return s
}

// AddFilter appends the provided FilterData to the existing provider's filter field.
func (s *Provider) AddFilter(filter FilterData) *Provider {
	if filter != "" {
		s.filter = append(s.filter, filter)
	}
	return s
}

// Parse parses the search query parameter from the provided query string
// and assigns the found fields to the current search provider.
//
// The data from the "sort" and "filter" query parameters are appended
// to the existing provider's `sort` and `filter` fields
// (aka. using `AddSort` and `AddFilter`).
func (s *Provider) Parse(urlQuery string) error {
	params, err := url.ParseQuery(urlQuery)
	if err != nil {
		return err
	}

	if rawPage := params.Get(PageQueryParam); rawPage != "" {
		page, err := strconv.Atoi(rawPage)
		if err != nil {
			return err
		}
		s.Page(page)
	}

	if rawPerPage := params.Get(PerPageQueryParam); rawPerPage != "" {
		perPage, err := strconv.Atoi(rawPerPage)
		if err != nil {
			return err
		}
		s.PerPage(perPage)
	}

	if rawSort := params.Get(SortQueryParam); rawSort != "" {
		for _, sortField := range ParseSortFromString(rawSort) {
			s.AddSort(sortField)
		}
	}

	if rawFilter := params.Get(FilterQueryParam); rawFilter != "" {
		s.AddFilter(FilterData(rawFilter))
	}

	return nil
}

// Exec executes the search provider and fills/scans
// the provided `items` slice with the found models.
func (s *Provider) Exec(items any) (*Result, error) {
	if s.query == nil {
		return nil, errors.New("Query is not set.")
	}

	// clone provider's query
	modelsQuery := *s.query

	// build filters
	for _, f := range s.filter {
		expr, err := f.BuildExpr(s.fieldResolver)
		if err != nil {
			return nil, err
		}
		if expr != nil {
			modelsQuery.AndWhere(expr)
		}
	}

	// apply sorting
	for _, sortField := range s.sort {
		expr, err := sortField.BuildExpr(s.fieldResolver)
		if err != nil {
			return nil, err
		}
		if expr != "" {
			modelsQuery.AndOrderBy(expr)
		}
	}

	// apply field resolver query modifications (if any)
	if err := s.fieldResolver.UpdateQuery(&modelsQuery); err != nil {
		return nil, err
	}

	queryInfo := modelsQuery.Info()

	// count
	var totalCount int64
	var baseTable string
	if len(queryInfo.From) > 0 {
		baseTable = queryInfo.From[0]
	}
	clone := modelsQuery
	countQuery := clone.Distinct(false).Select("COUNT(DISTINCT [[" + baseTable + "." + s.countCol + "]])").OrderBy()
	if err := countQuery.Row(&totalCount); err != nil {
		return nil, err
	}

	// normalize perPage
	if s.perPage <= 0 {
		s.perPage = DefaultPerPage
	} else if s.perPage > MaxPerPage {
		s.perPage = MaxPerPage
	}

	totalPages := int(math.Ceil(float64(totalCount) / float64(s.perPage)))

	// normalize page according to the total count
	if s.page <= 0 || totalCount == 0 {
		s.page = 1
	} else if s.page > totalPages {
		s.page = totalPages
	}

	// apply pagination
	modelsQuery.Limit(int64(s.perPage))
	modelsQuery.Offset(int64(s.perPage * (s.page - 1)))

	// fetch models
	if err := modelsQuery.All(items); err != nil {
		return nil, err
	}

	return &Result{
		Page:       s.page,
		PerPage:    s.perPage,
		TotalItems: int(totalCount),
		TotalPages: totalPages,
		Items:      items,
	}, nil
}

// ParseAndExec is a short convenient method to trigger both
// `Parse()` and `Exec()` in a single call.
func (s *Provider) ParseAndExec(urlQuery string, modelsSlice any) (*Result, error) {
	if err := s.Parse(urlQuery); err != nil {
		return nil, err
	}

	return s.Exec(modelsSlice)
}
