migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21jupwmt5suxqxb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vqfpv8ul",
    "name": "description",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21jupwmt5suxqxb")

  // remove
  collection.schema.removeField("vqfpv8ul")

  return dao.saveCollection(collection)
})
