migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.indexes = [
    "CREATE INDEX `_q58a9vvxuqutr4s_created_idx` ON `projects` (`created`)",
    "CREATE UNIQUE INDEX `idx_nmUW8vs` ON `projects` (`refID`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5mirqgr",
    "name": "title",
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
    "id": "bymbfi4e",
    "name": "location",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctfc7mwh",
    "name": "sector",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bvskwmbg",
    "name": "subsector",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhoelw4n",
    "name": "building_owner",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdr8ft71",
    "name": "supervisor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "fgc7psymuzadc54",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zlymyjjo",
    "name": "date_start",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bv4gyv28",
    "name": "date_end",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uuoe0x1f",
    "name": "refID",
    "type": "text",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.indexes = [
    "CREATE INDEX `_q58a9vvxuqutr4s_created_idx` ON \"projects\" (`created`)"
  ]

  // remove
  collection.schema.removeField("t5mirqgr")

  // remove
  collection.schema.removeField("bymbfi4e")

  // remove
  collection.schema.removeField("ctfc7mwh")

  // remove
  collection.schema.removeField("bvskwmbg")

  // remove
  collection.schema.removeField("qhoelw4n")

  // remove
  collection.schema.removeField("mdr8ft71")

  // remove
  collection.schema.removeField("zlymyjjo")

  // remove
  collection.schema.removeField("bv4gyv28")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uuoe0x1f",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
