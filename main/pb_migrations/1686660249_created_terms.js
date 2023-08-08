migrate((db) => {
  const collection = new Collection({
    "id": "wt728dblv516bnv",
    "created": "2023-06-13 12:44:09.082Z",
    "updated": "2023-06-13 12:44:09.082Z",
    "name": "terms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "txdgrdbs",
        "name": "content",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("wt728dblv516bnv");

  return dao.deleteCollection(collection);
})
