migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("veotpy56")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "veotpy56",
    "name": "email",
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
