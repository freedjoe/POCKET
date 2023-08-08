migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8f36vqrjl3tbnit")

  // remove
  collection.schema.removeField("19nzl3ri")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n1plwg1c",
    "name": "provider",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "t094d78bdlgnflz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uro9s8gj",
    "name": "date1",
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
    "id": "tlgub7qz",
    "name": "date2",
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
    "id": "8w46uy6b",
    "name": "cost",
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
    "id": "uurokvjk",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2zwvogdg",
    "name": "status",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pending",
        "Started",
        "Completed"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cyvzkzyp",
    "name": "file",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8f36vqrjl3tbnit")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "19nzl3ri",
    "name": "provider",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("n1plwg1c")

  // remove
  collection.schema.removeField("uro9s8gj")

  // remove
  collection.schema.removeField("tlgub7qz")

  // remove
  collection.schema.removeField("8w46uy6b")

  // remove
  collection.schema.removeField("uurokvjk")

  // remove
  collection.schema.removeField("2zwvogdg")

  // remove
  collection.schema.removeField("cyvzkzyp")

  return dao.saveCollection(collection)
})
