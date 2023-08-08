migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5eoow5466capalf")

  // remove
  collection.schema.removeField("kbybdhrg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ffztqdb8",
    "name": "country",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "20j7zspfuru0b5f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5eoow5466capalf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kbybdhrg",
    "name": "country",
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
  collection.schema.removeField("ffztqdb8")

  return dao.saveCollection(collection)
})
