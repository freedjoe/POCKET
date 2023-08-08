migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "av0kwjf3",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Employee",
        "Project",
        "Client",
        "Consultant"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "av0kwjf3",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Employee",
        "Client",
        "Consultant"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
