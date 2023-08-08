migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h93bgn6b",
    "name": "empID",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 2,
      "max": 10,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("h93bgn6b")

  return dao.saveCollection(collection)
})
