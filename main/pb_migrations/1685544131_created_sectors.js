migrate((db) => {
  const collection = new Collection({
    "id": "e3xa8lcnng0o742",
    "created": "2023-05-31 14:42:11.689Z",
    "updated": "2023-05-31 14:42:11.689Z",
    "name": "sectors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dsvdkjar",
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
  const collection = dao.findCollectionByNameOrId("e3xa8lcnng0o742");

  return dao.deleteCollection(collection);
})
