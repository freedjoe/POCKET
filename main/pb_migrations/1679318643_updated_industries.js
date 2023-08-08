migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
