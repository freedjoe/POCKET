migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  collection.viewRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
