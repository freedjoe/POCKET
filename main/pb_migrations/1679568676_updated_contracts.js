migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjbjkyqs",
    "name": "classification",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "55nnnxcf21trtdk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "class",
        "section",
        "rung"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yjbjkyqs",
    "name": "classification",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "55nnnxcf21trtdk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
