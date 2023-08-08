migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("ymepa6lo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nv7i1wko",
    "name": "office",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "21jupwmt5suxqxb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name",
        "department"
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
    "id": "ymepa6lo",
    "name": "office",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("nv7i1wko")

  return dao.saveCollection(collection)
})
