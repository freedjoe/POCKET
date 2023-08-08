migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovhefabh",
    "name": "refID",
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
  const collection = dao.findCollectionByNameOrId("zqf64pwcogih72d")

  // remove
  collection.schema.removeField("ovhefabh")

  return dao.saveCollection(collection)
})
