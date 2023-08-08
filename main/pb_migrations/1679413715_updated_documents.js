migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihzpbyh2",
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
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  // remove
  collection.schema.removeField("ihzpbyh2")

  return dao.saveCollection(collection)
})
