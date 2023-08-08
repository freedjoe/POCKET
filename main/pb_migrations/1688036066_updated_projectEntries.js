migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4albsvxc",
    "name": "progress",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // remove
  collection.schema.removeField("4albsvxc")

  return dao.saveCollection(collection)
})
