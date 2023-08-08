migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hcayzcbm",
    "name": "Recieved",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  // remove
  collection.schema.removeField("hcayzcbm")

  return dao.saveCollection(collection)
})
