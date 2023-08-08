migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xtoc3so",
    "name": "sector2",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "e3xa8lcnng0o742",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xtoc3so",
    "name": "sector",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "e3xa8lcnng0o742",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
