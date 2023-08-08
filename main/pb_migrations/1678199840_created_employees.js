migrate((db) => {
  const collection = new Collection({
    "id": "9imbmzhylom3te5",
    "created": "2023-03-07 14:37:20.747Z",
    "updated": "2023-03-07 14:37:20.747Z",
    "name": "employees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ij6qbdhp",
        "name": "fullname",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sjrfoznh",
        "name": "birthdate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "85quwigh",
        "name": "birthtown",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "8rhwe8sq",
        "name": "department",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9imbmzhylom3te5");

  return dao.deleteCollection(collection);
})
