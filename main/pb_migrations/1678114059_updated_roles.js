migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
