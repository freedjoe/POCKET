migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.indexes = [
    "CREATE INDEX `_q58a9vvxuqutr4s_created_idx` ON `projects` (`created`)",
    "CREATE UNIQUE INDEX `idx_nmUW8vs` ON `projects` (`code`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uuoe0x1f",
    "name": "code",
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
    "CREATE INDEX `_q58a9vvxuqutr4s_created_idx` ON `projects` (`created`)",
    "CREATE UNIQUE INDEX `idx_nmUW8vs` ON `projects` (`refID`)"
  ]

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
})
