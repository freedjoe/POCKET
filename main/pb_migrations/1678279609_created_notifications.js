migrate((db) => {
  const collection = new Collection({
    "id": "e9ijvb4a8dd9rop",
    "created": "2023-03-08 12:46:49.444Z",
    "updated": "2023-03-08 12:46:49.444Z",
    "name": "notifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "it9elz9i",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("e9ijvb4a8dd9rop");

  return dao.deleteCollection(collection);
})
