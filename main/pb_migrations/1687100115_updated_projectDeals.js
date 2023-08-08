migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dlauw0u1",
    "name": "code",
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
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // remove
  collection.schema.removeField("dlauw0u1")

  return dao.saveCollection(collection)
})
