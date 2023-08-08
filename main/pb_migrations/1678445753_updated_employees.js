migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltztgfde",
    "name": "lastname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 30,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjxk1p1q",
    "name": "firstname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 30,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // remove
  collection.schema.removeField("ltztgfde")

  // remove
  collection.schema.removeField("hjxk1p1q")

  return dao.saveCollection(collection)
})
