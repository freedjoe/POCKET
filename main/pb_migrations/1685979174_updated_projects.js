migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // remove
  collection.schema.removeField("fxbrccp2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkuvmxkz",
    "name": "status",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wrsifjuzpdj924k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxbrccp2",
    "name": "status",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "buwfg55vsxdacix",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("qkuvmxkz")

  return dao.saveCollection(collection)
})
