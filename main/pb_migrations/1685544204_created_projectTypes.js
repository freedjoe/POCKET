migrate((db) => {
  const collection = new Collection({
    "id": "g5r2uz3e8mxufdw",
    "created": "2023-05-31 14:43:24.741Z",
    "updated": "2023-05-31 14:43:24.741Z",
    "name": "projectTypes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r1z5tsyy",
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
        "id": "8xtoc3so",
        "name": "sector",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "e3xa8lcnng0o742",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("g5r2uz3e8mxufdw");

  return dao.deleteCollection(collection);
})
