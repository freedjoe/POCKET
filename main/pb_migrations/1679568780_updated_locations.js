migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21jupwmt5suxqxb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xze9q0nl",
    "name": "name",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xze9q0nl",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
