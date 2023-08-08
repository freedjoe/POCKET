migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wey0cbxc",
    "name": "code",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": 2,
      "max": 10,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whxnx61d",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wey0cbxc",
    "name": "code",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 2,
      "max": 10,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whxnx61d",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
