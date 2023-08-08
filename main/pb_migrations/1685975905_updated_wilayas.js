migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "blehz1xp",
    "name": "code1",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tju6qzeg",
    "name": "code2",
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
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5")

  // remove
  collection.schema.removeField("blehz1xp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tju6qzeg",
    "name": "code",
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
})
