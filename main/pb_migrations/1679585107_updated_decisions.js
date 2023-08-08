migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rliiiw78",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rliiiw78",
    "name": "employeeID",
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
  }))

  return dao.saveCollection(collection)
})
