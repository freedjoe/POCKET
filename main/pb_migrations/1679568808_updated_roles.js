migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azjp372p",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azjp372p",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
