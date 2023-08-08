migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // remove
  collection.schema.removeField("k8aazymd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ec1pydj3",
    "name": "local",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "21jupwmt5suxqxb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "description"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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
        "Archive",
        "Library",
        "Secretariat"
      ]
    }
  }))

  // remove
  collection.schema.removeField("ec1pydj3")

  return dao.saveCollection(collection)
})
