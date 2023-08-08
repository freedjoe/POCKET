migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // remove
  collection.schema.removeField("kxfw5zg5")

  // remove
  collection.schema.removeField("u02pmc3g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jiy1hllk",
    "name": "type",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wrsifjuzpdj924k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "description"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxfw5zg5",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A",
        "B",
        "C",
        "D"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u02pmc3g",
    "name": "enterprise",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5eoow5466capalf",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "name"
      ]
    }
  }))

  // remove
  collection.schema.removeField("jiy1hllk")

  return dao.saveCollection(collection)
})
