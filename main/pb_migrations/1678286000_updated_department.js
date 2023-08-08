migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy")

  collection.name = "departments"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy")

  collection.name = "department"

  return dao.saveCollection(collection)
})
