migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // remove
  collection.schema.removeField("bymbfi4e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ks1zysm7",
    "name": "location",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "rqjn6f1eemot9q5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // add
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

  // remove
  collection.schema.removeField("ks1zysm7")

  return dao.saveCollection(collection)
})
