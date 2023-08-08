migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5eoow5466capalf")

  collection.name = "organisms"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vz5h7ugq",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Maître d'ouvrage",
        "Gestionnaire",
        "Bureau d'études",
        "Entreprise de réalisation"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5eoow5466capalf")

  collection.name = "enterprises"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vz5h7ugq",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A",
        "B",
        "C"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
