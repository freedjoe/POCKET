migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("20j7zspfuru0b5f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbwc7phb",
    "name": "continent",
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
  const collection = dao.findCollectionByNameOrId("20j7zspfuru0b5f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbwc7phb",
    "name": "region",
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
