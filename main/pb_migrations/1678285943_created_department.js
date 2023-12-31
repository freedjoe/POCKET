migrate((db) => {
  const collection = new Collection({
    "id": "1wcdnbnlhfgexhy",
    "created": "2023-03-08 14:32:23.160Z",
    "updated": "2023-03-08 14:32:23.160Z",
    "name": "department",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "whxnx61d",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
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
  const collection = dao.findCollectionByNameOrId("1wcdnbnlhfgexhy");

  return dao.deleteCollection(collection);
})
