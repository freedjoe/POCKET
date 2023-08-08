migrate((db) => {
  const collection = new Collection({
    "id": "wrsifjuzpdj924k",
    "created": "2023-03-10 19:54:11.403Z",
    "updated": "2023-03-10 19:54:11.403Z",
    "name": "status",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xzptihqm",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("wrsifjuzpdj924k");

  return dao.deleteCollection(collection);
})
