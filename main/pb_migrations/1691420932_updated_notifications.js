migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  // remove
  collection.schema.removeField("owfhvlxn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owfhvlxn",
    "name": "path",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
