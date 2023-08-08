migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "blehz1xp",
    "name": "code",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5")

  // update
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

  return dao.saveCollection(collection)
})
