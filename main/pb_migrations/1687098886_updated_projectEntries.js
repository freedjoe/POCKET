migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlh2p22s",
    "name": "project",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "q58a9vvxuqutr4s",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "title"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jiy1hllk",
    "name": "type",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wrsifjuzpdj924k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "description"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlh2p22s",
    "name": "project",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q58a9vvxuqutr4s",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "title"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jiy1hllk",
    "name": "type",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wrsifjuzpdj924k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "description"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
