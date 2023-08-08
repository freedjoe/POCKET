migrate((db) => {
  const collection = new Collection({
    "id": "21jupwmt5suxqxb",
    "created": "2023-03-21 09:54:14.039Z",
    "updated": "2023-03-21 09:54:14.039Z",
    "name": "locations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rikflug9",
        "name": "department",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "1wcdnbnlhfgexhy",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "xze9q0nl",
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
  const collection = dao.findCollectionByNameOrId("21jupwmt5suxqxb");

  return dao.deleteCollection(collection);
})
