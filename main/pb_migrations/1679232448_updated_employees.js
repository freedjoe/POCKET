migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("zmpizipn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxnilkhh",
    "name": "region",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "state"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zmpizipn",
    "name": "region",
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
  collection.schema.removeField("cxnilkhh")

  return dao.saveCollection(collection)
})
