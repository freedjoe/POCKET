migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xzptihqm",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xzptihqm",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

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

  // update
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

  return dao.saveCollection(collection)
})
