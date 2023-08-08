migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("ij6qbdhp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ij6qbdhp",
    "name": "fullname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
