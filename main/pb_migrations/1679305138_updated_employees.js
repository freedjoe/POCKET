migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "env5n8pn",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 2242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "env5n8pn",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 2242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
