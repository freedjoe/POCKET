migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h93bgn6b",
    "name": "empID",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": 2,
      "max": 10,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltztgfde",
    "name": "lastname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 30,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjxk1p1q",
    "name": "firstname",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 30,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jaahsdwy",
    "name": "recruited",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lh6lcilf",
    "name": "post",
    "type": "text",
    "required": false,
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
    "id": "omjmzhtk",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Agent",
        "Execution",
        "Mastery",
        "Cadre",
        "Executive",
        "Head of Service",
        "Director"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjp6qqv2",
    "name": "salary",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ar3ee2qu",
    "name": "status",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wrsifjuzpdj924k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h93bgn6b",
    "name": "empID",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 2,
      "max": 10,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltztgfde",
    "name": "lastname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 2,
      "max": 30,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjxk1p1q",
    "name": "firstname",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 30,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jaahsdwy",
    "name": "recruited",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lh6lcilf",
    "name": "post",
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
    "id": "omjmzhtk",
    "name": "category",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Agent",
        "Execution",
        "Mastery",
        "Cadre",
        "Executive",
        "Head of Service",
        "Director"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjp6qqv2",
    "name": "salary",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ar3ee2qu",
    "name": "status",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "wrsifjuzpdj924k",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
