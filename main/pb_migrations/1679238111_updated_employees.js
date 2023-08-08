migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omjmzhtk",
    "name": "category",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Agent",
        "Execution",
        "Mastery",
        "Cadre",
        "Executive",
        "Head of Service",
        "Director"
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
    "id": "omjmzhtk",
    "name": "category",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Execution",
        "Metrise"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
