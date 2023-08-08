migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_uTj75dL` ON `projectStatus` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix")

  collection.indexes = []

  return dao.saveCollection(collection)
})
