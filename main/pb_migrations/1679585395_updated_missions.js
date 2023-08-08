migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d")

  // remove
  collection.schema.removeField("m6pnsflc")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6pnsflc",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
