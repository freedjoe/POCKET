migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bymbfi4e",
    "name": "location",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "region"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bymbfi4e",
    "name": "location",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
