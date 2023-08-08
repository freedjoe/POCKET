migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8aazymd",
    "name": "local",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "archive",
        "library",
        "secretariat"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // remove
  collection.schema.removeField("k8aazymd")

  return dao.saveCollection(collection)
})
