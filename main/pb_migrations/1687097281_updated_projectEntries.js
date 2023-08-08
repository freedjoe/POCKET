migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruyoehh2",
    "name": "files",
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
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // remove
  collection.schema.removeField("ruyoehh2")

  return dao.saveCollection(collection)
})
