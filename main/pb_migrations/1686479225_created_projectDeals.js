migrate((db) => {
  const collection = new Collection({
    "id": "heg4k0g6m0me6gs",
    "created": "2023-06-11 10:27:05.663Z",
    "updated": "2023-06-11 10:27:05.663Z",
    "name": "projectDeals",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u8urtuch",
        "name": "project",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "q58a9vvxuqutr4s",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "title"
          ]
        }
      },
      {
        "system": false,
        "id": "dx2tyfdf",
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
  const collection = dao.findCollectionByNameOrId("heg4k0g6m0me6gs");

  return dao.deleteCollection(collection);
})
