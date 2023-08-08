migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  collection.name = "projectEntries"
  collection.indexes = []

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z8netqnq",
    "name": "apEtudes",
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
    "id": "qxvkj3om",
    "name": "apTravaux",
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
    "id": "oogeydzn",
    "name": "observation",
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
    "id": "wfp4fwti",
    "name": "recommendation",
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
    "id": "wawhng4o",
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
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  collection.name = "projectStatus"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_uTj75dL` ON `projectStatus` (`name`)"
  ]

  // remove
  collection.schema.removeField("mlh2p22s")

  // remove
  collection.schema.removeField("z8netqnq")

  // remove
  collection.schema.removeField("qxvkj3om")

  // remove
  collection.schema.removeField("oogeydzn")

  // remove
  collection.schema.removeField("wfp4fwti")

  // remove
  collection.schema.removeField("wawhng4o")

  return dao.saveCollection(collection)
})
