migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wfmx122bg7k07mk")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
