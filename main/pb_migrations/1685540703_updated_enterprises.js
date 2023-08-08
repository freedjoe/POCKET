migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5eoow5466capalf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vz5h7ugq",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A",
        "B",
        "C"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5eoow5466capalf")

  // remove
  collection.schema.removeField("vz5h7ugq")

  return dao.saveCollection(collection)
})
