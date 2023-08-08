migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebx23xsu",
    "name": "files",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 999,
      "maxSize": 5242880000,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // remove
  collection.schema.removeField("ebx23xsu")

  return dao.saveCollection(collection)
})
