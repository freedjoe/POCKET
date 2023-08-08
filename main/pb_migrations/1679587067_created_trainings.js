migrate((db) => {
  const collection = new Collection({
    "id": "8f36vqrjl3tbnit",
    "created": "2023-03-23 15:57:47.965Z",
    "updated": "2023-03-23 15:57:47.965Z",
    "name": "trainings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7wu0ay8a",
        "name": "employee",
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
      },
      {
        "system": false,
        "id": "wnclxtdc",
        "name": "title",
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
        "id": "19nzl3ri",
        "name": "provider",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8f36vqrjl3tbnit");

  return dao.deleteCollection(collection);
})
