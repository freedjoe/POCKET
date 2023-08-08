migrate((db) => {
  const collection = new Collection({
    "id": "h3ewdh4n7421kh3",
    "created": "2023-03-23 10:22:32.389Z",
    "updated": "2023-03-23 10:22:32.389Z",
    "name": "decisions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rliiiw78",
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
        "id": "4pudxcp0",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Contact",
            "Promotion",
            "Sanction"
          ]
        }
      },
      {
        "system": false,
        "id": "fadxdsoi",
        "name": "number",
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
        "id": "l2akx0o0",
        "name": "date1",
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
        "id": "dto7lhpz",
        "name": "date2",
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
        "id": "sxe8d5zd",
        "name": "classification",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "55nnnxcf21trtdk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "class",
            "section",
            "rung"
          ]
        }
      },
      {
        "system": false,
        "id": "0c0kylbj",
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
  const collection = dao.findCollectionByNameOrId("h3ewdh4n7421kh3");

  return dao.deleteCollection(collection);
})
