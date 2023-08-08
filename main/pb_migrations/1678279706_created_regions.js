migrate((db) => {
  const collection = new Collection({
    "id": "fgc7psymuzadc54",
    "created": "2023-03-08 12:48:26.839Z",
    "updated": "2023-03-08 12:48:26.839Z",
    "name": "regions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "udapn2k6",
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
  const collection = dao.findCollectionByNameOrId("fgc7psymuzadc54");

  return dao.deleteCollection(collection);
})
