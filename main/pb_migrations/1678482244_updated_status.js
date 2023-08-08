migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivjholey",
    "name": "color",
    "type": "select",
    "required": true,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "azmws8wa",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // remove
  collection.schema.removeField("av0kwjf3")

  // remove
  collection.schema.removeField("ivjholey")

  // remove
  collection.schema.removeField("azmws8wa")

  return dao.saveCollection(collection)
})
