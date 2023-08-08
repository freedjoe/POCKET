migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "av0kwjf3",
    "name": "type",
    "type": "select",
    "required": true,
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "av0kwjf3",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "employee",
        "client",
        "consultant"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
