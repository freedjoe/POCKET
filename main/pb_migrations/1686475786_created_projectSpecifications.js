migrate((db) => {
  const collection = new Collection({
    "id": "d54bxic5zh2nbuq",
    "created": "2023-06-11 09:29:46.415Z",
    "updated": "2023-06-11 09:29:46.415Z",
    "name": "projectSpecifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rvfkvtrz",
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
        "id": "f6vsgbdr",
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
        "id": "wxxbcxr2",
        "name": "unit",
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
        "id": "npggzpgk",
        "name": "value",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("d54bxic5zh2nbuq");

  return dao.deleteCollection(collection);
})
