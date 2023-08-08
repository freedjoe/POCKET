migrate((db) => {
  const collection = new Collection({
    "id": "z0zyj5vgsvcdj5r",
    "created": "2023-03-25 15:33:07.408Z",
    "updated": "2023-03-25 15:33:07.408Z",
    "name": "modules",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pumcmnlf",
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
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z0zyj5vgsvcdj5r");

  return dao.deleteCollection(collection);
})
