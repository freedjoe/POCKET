migrate((db) => {
  const collection = new Collection({
    "id": "55nnnxcf21trtdk",
    "created": "2023-03-19 14:18:15.195Z",
    "updated": "2023-03-19 14:18:15.195Z",
    "name": "classifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mm5dd1v7",
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
        "id": "o26llthg",
        "name": "class",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "I",
            "II",
            "III",
            "IV",
            "V"
          ]
        }
      },
      {
        "system": false,
        "id": "w0a9pf4b",
        "name": "section",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11"
          ]
        }
      },
      {
        "system": false,
        "id": "w46kwanu",
        "name": "rung",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11"
          ]
        }
      },
      {
        "system": false,
        "id": "sh5swdix",
        "name": "salary",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ijezleaf",
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
  const collection = dao.findCollectionByNameOrId("55nnnxcf21trtdk");

  return dao.deleteCollection(collection);
})
