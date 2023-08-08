migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmsiebgj",
    "name": "locationMaps",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmsiebgj",
    "name": "maps",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
