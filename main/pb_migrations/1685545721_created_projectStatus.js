migrate((db) => {
  const collection = new Collection({
    "id": "buwfg55vsxdacix",
    "created": "2023-05-31 15:08:41.810Z",
    "updated": "2023-05-31 15:08:41.810Z",
    "name": "projectStatus",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vcfmsato",
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
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("buwfg55vsxdacix");

  return dao.deleteCollection(collection);
})
