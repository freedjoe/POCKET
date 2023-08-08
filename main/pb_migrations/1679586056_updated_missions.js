migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gt9xa2pj",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Started",
        "Completed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d")

  // remove
  collection.schema.removeField("gt9xa2pj")

  return dao.saveCollection(collection)
})
