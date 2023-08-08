migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nr7w5aci",
    "name": "files",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 999,
      "maxSize": 5242880000,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // remove
  collection.schema.removeField("nr7w5aci")

  return dao.saveCollection(collection)
})
