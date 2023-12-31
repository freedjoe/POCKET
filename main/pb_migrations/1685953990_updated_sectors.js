migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e3xa8lcnng0o742")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\""
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_IMbdTw6` ON `sectors` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e3xa8lcnng0o742")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null
  collection.indexes = []

  return dao.saveCollection(collection)
})
