migrate((db) => {
  const collection = new Collection({
    "id": "rqjn6f1eemot9q5",
    "created": "2023-06-05 14:19:26.532Z",
    "updated": "2023-06-05 14:19:26.532Z",
    "name": "wilayas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "prvdlbcp",
        "name": "name",
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
        "id": "1ytkgmkv",
        "name": "nameAR",
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
        "id": "tju6qzeg",
        "name": "code",
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
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("rqjn6f1eemot9q5");

  return dao.deleteCollection(collection);
})
