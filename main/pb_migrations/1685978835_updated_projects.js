migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // remove
  collection.schema.removeField("kkl1skz0")

  // remove
  collection.schema.removeField("uuvbtcex")

  // remove
  collection.schema.removeField("xo5kvl6e")

  // remove
  collection.schema.removeField("7xsnomng")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkl1skz0",
    "name": "goals",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uuvbtcex",
    "name": "characteristics",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xo5kvl6e",
    "name": "structure",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7xsnomng",
    "name": "deals",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
