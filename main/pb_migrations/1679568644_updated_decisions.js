migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rliiiw78",
    "name": "employeeID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9imbmzhylom3te5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "lastname",
        "firstname"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4pudxcp0",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Promotion",
        "Sanction",
        "Other"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fadxdsoi",
    "name": "refID",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxe8d5zd",
    "name": "classification",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "55nnnxcf21trtdk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "class",
        "section",
        "rung"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rliiiw78",
    "name": "employeeID",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "9imbmzhylom3te5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "lastname",
        "firstname"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4pudxcp0",
    "name": "type",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Promotion",
        "Sanction",
        "Other"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fadxdsoi",
    "name": "refID",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxe8d5zd",
    "name": "classification",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "55nnnxcf21trtdk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "class",
        "section",
        "rung"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
