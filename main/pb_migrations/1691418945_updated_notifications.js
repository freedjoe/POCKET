migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqh9fz8y",
    "name": "path",
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
    "id": "hcayzcbm",
    "name": "recieved",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "path": "",
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  // remove
  collection.schema.removeField("mqh9fz8y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hcayzcbm",
    "name": "Recieved",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "path": "",
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
