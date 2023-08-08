migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_zHdT4IB` ON `projectTypes` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw")

  collection.indexes = []

  return dao.saveCollection(collection)
})
