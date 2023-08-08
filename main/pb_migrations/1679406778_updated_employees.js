migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "doj8s4r2",
    "name": "documents",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kylwuts3",
    "name": "files",
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
  collection.schema.removeField("doj8s4r2")

  // update
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
})
