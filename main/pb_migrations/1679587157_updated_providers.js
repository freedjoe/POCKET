migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t094d78bdlgnflz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihgucyvh",
    "name": "nif",
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
  const collection = dao.findCollectionByNameOrId("t094d78bdlgnflz")

  // remove
  collection.schema.removeField("ihgucyvh")

  return dao.saveCollection(collection)
})
