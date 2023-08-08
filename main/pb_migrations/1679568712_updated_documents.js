migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cms35kcc",
    "name": "employeeID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9imbmzhylom3te5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "lastname",
        "firstname"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rs1yvjml",
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
    "id": "mgylh0aj",
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
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cms35kcc",
    "name": "employeeID",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "9imbmzhylom3te5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "lastname",
        "firstname"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rs1yvjml",
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
    "id": "mgylh0aj",
    "name": "file",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
