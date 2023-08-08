migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wey0cbxc",
    "name": "code",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 2,
      "max": 10,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy")

  // remove
  collection.schema.removeField("wey0cbxc")

  return dao.saveCollection(collection)
})
