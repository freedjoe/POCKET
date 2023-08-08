migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ts4hmzub",
    "name": "situation",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Married",
        "Single",
        "Divorced",
        "Widowed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ts4hmzub",
    "name": "situation",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Divorced",
        "Married",
        "Single",
        "Widowed"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
