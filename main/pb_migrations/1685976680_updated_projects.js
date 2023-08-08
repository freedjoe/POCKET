migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8wqfoe94",
    "name": "apEtudes",
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
    "id": "tddqkel2",
    "name": "apTravaux",
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
  collection.schema.removeField("8wqfoe94")

  // remove
  collection.schema.removeField("tddqkel2")

  return dao.saveCollection(collection)
})
