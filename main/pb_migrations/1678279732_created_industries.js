migrate((db) => {
  const collection = new Collection({
    "id": "q58a9vvxuqutr4s",
    "created": "2023-03-08 12:48:52.079Z",
    "updated": "2023-03-08 12:48:52.079Z",
    "name": "industries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uuoe0x1f",
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
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q58a9vvxuqutr4s");

  return dao.deleteCollection(collection);
})
