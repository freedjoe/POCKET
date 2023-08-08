migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // remove
  collection.schema.removeField("1u1bjlly")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "al2axr5c",
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
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1u1bjlly",
    "name": "received",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("al2axr5c")

  return dao.saveCollection(collection)
})
