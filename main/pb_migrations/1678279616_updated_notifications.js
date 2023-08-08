migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
