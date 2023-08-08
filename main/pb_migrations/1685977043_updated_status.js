migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivjholey",
    "name": "color",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger"
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
    "id": "ivjholey",
    "name": "color",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "primary",
        "secondary",
        "success",
        "info"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
