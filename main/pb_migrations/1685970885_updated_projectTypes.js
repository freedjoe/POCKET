migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vvonzj8a",
    "name": "sector",
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
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw")

  // remove
  collection.schema.removeField("vvonzj8a")

  return dao.saveCollection(collection)
})
