migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxrc1jes",
    "name": "file",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fadxdsoi",
    "name": "refID",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // remove
  collection.schema.removeField("vxrc1jes")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fadxdsoi",
    "name": "number",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
