migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
