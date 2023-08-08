migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "10fhcnyb",
    "name": "enddate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "10fhcnyb",
    "name": "finishdate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
