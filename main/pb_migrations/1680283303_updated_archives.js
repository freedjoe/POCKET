migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "foytbi6m",
    "name": "file",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // remove
  collection.schema.removeField("foytbi6m")

  return dao.saveCollection(collection)
})
