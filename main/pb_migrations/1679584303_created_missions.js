migrate((db) => {
  const collection = new Collection({
    "id": "zqf64pwcogih72d",
    "created": "2023-03-23 15:11:43.588Z",
    "updated": "2023-03-23 15:11:43.588Z",
    "name": "missions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aaezebcl",
        "name": "employee",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "9imbmzhylom3te5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "lastname",
            "firstname"
          ]
        }
      },
      {
        "system": false,
        "id": "oj4gtn5h",
        "name": "destination",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "fgc7psymuzadc54",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "region",
            "state"
          ]
        }
      },
      {
        "system": false,
        "id": "v1wap8ax",
        "name": "purpose",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fdcsisrw",
        "name": "datego",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "kcminpmw",
        "name": "datereturn",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "axghudi1",
        "name": "transport",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "m6pnsflc",
        "name": "date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d");

  return dao.deleteCollection(collection);
})
