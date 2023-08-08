migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.name = "projects"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s")

  collection.name = "industries"

  return dao.saveCollection(collection)
})
