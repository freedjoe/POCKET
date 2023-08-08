migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d54bxic5zh2nbuq")

  collection.name = "projectSpecs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d54bxic5zh2nbuq")

  collection.name = "projectSpecifications"

  return dao.saveCollection(collection)
})
