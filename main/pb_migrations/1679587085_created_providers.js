migrate((db) => {
  const collection = new Collection({
    "id": "t094d78bdlgnflz",
    "created": "2023-03-23 15:58:05.545Z",
    "updated": "2023-03-23 15:58:05.545Z",
    "name": "providers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fk4gpzal",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("t094d78bdlgnflz");

  return dao.deleteCollection(collection);
})
