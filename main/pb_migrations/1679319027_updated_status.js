migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "emx0fc9e",
    "name": "level0",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // remove
  collection.schema.removeField("emx0fc9e")

  return dao.saveCollection(collection)
})
