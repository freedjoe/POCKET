migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d54bxic5zh2nbuq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frmgm47k",
    "name": "history",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d54bxic5zh2nbuq")

  // remove
  collection.schema.removeField("frmgm47k")

  return dao.saveCollection(collection)
})
