migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eeberz9w",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Box",
        "Book",
        "Document",
        "Letter"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8aazymd",
    "name": "local",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Archive",
        "Library",
        "Secretariat"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eeberz9w",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "lettre",
        "document",
        "box"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8aazymd",
    "name": "local",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "archive",
        "library",
        "secretariat"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
