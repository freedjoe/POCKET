migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cms35kcc",
    "name": "employeeID",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cms35kcc",
    "name": "employeeID",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "9imbmzhylom3te5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
