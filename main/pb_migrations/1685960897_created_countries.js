migrate((db) => {
  const collection = new Collection({
    "id": "20j7zspfuru0b5f",
    "created": "2023-06-05 10:28:17.055Z",
    "updated": "2023-06-05 10:28:17.055Z",
    "name": "countries",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ruiooly0",
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
        "id": "2wsmxaqn",
        "name": "iso2",
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
        "id": "7su22qes",
        "name": "iso3",
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
        "id": "cxcui7lq",
        "name": "capital",
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
        "id": "vbwc7phb",
        "name": "region",
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
  const collection = dao.findCollectionByNameOrId("20j7zspfuru0b5f");

  return dao.deleteCollection(collection);
})
