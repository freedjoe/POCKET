migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btrwfube",
    "name": "received",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // remove
  collection.schema.removeField("btrwfube")

  return dao.saveCollection(collection)
})
