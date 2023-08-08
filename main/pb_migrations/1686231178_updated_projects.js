migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abyst0yn",
    "name": "latitudePosition",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vwqqfltv",
    "name": "longitudePosition",
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
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // remove
  collection.schema.removeField("abyst0yn")

  // remove
  collection.schema.removeField("vwqqfltv")

  return dao.saveCollection(collection)
})
