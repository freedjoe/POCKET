migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
