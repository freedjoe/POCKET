migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khbb46qr",
    "name": "enterprise",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5eoow5466capalf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "name"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykzxyfwc",
    "name": "amount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t8nlyomb",
    "name": "period",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rysiptpl",
    "name": "startDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5vwb3p2y",
    "name": "endDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldgrllun",
    "name": "history",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mk8fvmws",
    "name": "physicalRate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hq0rabvz",
    "name": "financialRate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vdzg07gp",
    "name": "periodRate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs")

  // remove
  collection.schema.removeField("khbb46qr")

  // remove
  collection.schema.removeField("ykzxyfwc")

  // remove
  collection.schema.removeField("t8nlyomb")

  // remove
  collection.schema.removeField("rysiptpl")

  // remove
  collection.schema.removeField("5vwb3p2y")

  // remove
  collection.schema.removeField("ldgrllun")

  // remove
  collection.schema.removeField("mk8fvmws")

  // remove
  collection.schema.removeField("hq0rabvz")

  // remove
  collection.schema.removeField("vdzg07gp")

  return dao.saveCollection(collection)
})
