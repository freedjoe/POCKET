migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5")

  // remove
  collection.schema.removeField("tju6qzeg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tju6qzeg",
    "name": "code2",
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
