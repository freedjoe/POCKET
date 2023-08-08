migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgc7psymuzadc54")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ltrhbij",
    "name": "state",
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
    "id": "udapn2k6",
    "name": "region",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("fgc7psymuzadc54")

  // remove
  collection.schema.removeField("2ltrhbij")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udapn2k6",
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

  return dao.saveCollection(collection)
})
