migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("8rhwe8sq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvrex2az",
    "name": "department",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1wcdnbnlhfgexhy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "code",
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8rhwe8sq",
    "name": "department",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("pvrex2az")

  return dao.saveCollection(collection)
})
