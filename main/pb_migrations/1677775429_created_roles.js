migrate((db) => {
  const collection = new Collection({
    "id": "3v9h6j96yoymy2a",
    "created": "2023-03-02 16:43:49.916Z",
    "updated": "2023-03-02 16:43:49.916Z",
    "name": "roles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "azjp372p",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5d3ssmlw",
        "name": "modules",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ak3d0vb9",
        "name": "ability",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("3v9h6j96yoymy2a");

  return dao.deleteCollection(collection);
})
