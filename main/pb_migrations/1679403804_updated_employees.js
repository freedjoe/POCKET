migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kylwuts3",
    "name": "documents",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("kylwuts3")

  return dao.saveCollection(collection)
})
