migrate((db) => {
  const collection = new Collection({
    "id": "wqwzjqcjio1wtp6",
    "created": "2023-03-31 16:44:08.043Z",
    "updated": "2023-03-31 16:44:08.043Z",
    "name": "archives",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r1u3vxgq",
        "name": "refID",
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
        "id": "otwstnyj",
        "name": "title",
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
        "id": "eeberz9w",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "lettre",
            "document",
            "box"
          ]
        }
      },
      {
        "system": false,
        "id": "1w7r0e0b",
        "name": "shelf",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "e466ldjr",
        "name": "description",
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
  const collection = dao.findCollectionByNameOrId("wqwzjqcjio1wtp6");

  return dao.deleteCollection(collection);
})
