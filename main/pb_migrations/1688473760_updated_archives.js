migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // update
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
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // update
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
})
