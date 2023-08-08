migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qowefjsd",
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
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // remove
  collection.schema.removeField("qowefjsd")

  return dao.saveCollection(collection)
})
