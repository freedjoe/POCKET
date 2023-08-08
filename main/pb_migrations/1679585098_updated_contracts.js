migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cs71imfu",
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
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cs71imfu",
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
