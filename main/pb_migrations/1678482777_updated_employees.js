migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("fzlqpb0w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ar3ee2qu",
    "name": "status",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fzlqpb0w",
    "name": "status",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ar3ee2qu")

  return dao.saveCollection(collection)
})
