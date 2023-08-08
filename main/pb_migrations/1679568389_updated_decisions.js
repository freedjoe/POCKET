migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4pudxcp0",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Promotion",
        "Sanction",
        "Other"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4pudxcp0",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Contact",
        "Promotion",
        "Sanction"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
