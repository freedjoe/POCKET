migrate((db) => {
  const collection = new Collection({
    "id": "3beskc7gaenibct",
    "created": "2023-03-14 13:31:09.096Z",
    "updated": "2023-03-14 13:31:09.096Z",
    "name": "contracts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cs71imfu",
        "name": "employeeID",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "9imbmzhylom3te5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "lastname",
            "firstname"
          ]
        }
      },
      {
        "system": false,
        "id": "z6tdrcjg",
        "name": "refID",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ly4zoajh",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Avenant",
            "C.D.D",
            "C.D.I",
            "Resignation",
            "Termination"
          ]
        }
      },
      {
        "system": false,
        "id": "zdnrzp2j",
        "name": "startdate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "10fhcnyb",
        "name": "enddate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "rbbsyek2",
        "name": "description",
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
        "id": "tn4apqgl",
        "name": "file",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("3beskc7gaenibct");

  return dao.deleteCollection(collection);
})
