migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // remove
  collection.schema.removeField("1w7r0e0b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gfm08ilx",
    "name": "shelf",
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
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1w7r0e0b",
    "name": "shelf",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("gfm08ilx")

  return dao.saveCollection(collection)
})
