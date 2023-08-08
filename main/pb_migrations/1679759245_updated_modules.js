migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z0zyj5vgsvcdj5r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xu46xw3",
    "name": "root",
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
  const collection = dao.findCollectionByNameOrId("z0zyj5vgsvcdj5r")

  // remove
  collection.schema.removeField("5xu46xw3")

  return dao.saveCollection(collection)
})
