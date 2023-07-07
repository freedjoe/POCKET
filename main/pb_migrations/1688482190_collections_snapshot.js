migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2023-02-19 12:21:54.509Z",
      "updated": "2023-05-02 10:53:46.662Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "pdoywour",
          "name": "role",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "3v9h6j96yoymy2a",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "ulj4nymk",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 2000000,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "mqd45rfi",
          "name": "disabled",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `__pb_users_auth__created_idx` ON `users` (`created`)"
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 5,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "3v9h6j96yoymy2a",
      "created": "2023-03-02 16:43:49.916Z",
      "updated": "2023-03-28 11:59:09.105Z",
      "name": "roles",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "azjp372p",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "5d3ssmlw",
          "name": "modules",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ak3d0vb9",
          "name": "ability",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `_3v9h6j96yoymy2a_created_idx` ON `roles` (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_azjp372p\" on \"roles\" (\"name\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "9imbmzhylom3te5",
      "created": "2023-03-07 14:37:20.747Z",
      "updated": "2023-03-28 11:59:09.106Z",
      "name": "employees",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "h93bgn6b",
          "name": "empID",
          "type": "text",
          "required": false,
          "unique": true,
          "options": {
            "min": 2,
            "max": 10,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "jqusydbc",
          "name": "userID",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "username"
            ]
          }
        },
        {
          "system": false,
          "id": "ltztgfde",
          "name": "lastname",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 30,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "hjxk1p1q",
          "name": "firstname",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": 3,
            "max": 30,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "sjrfoznh",
          "name": "birthdate",
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
          "id": "85quwigh",
          "name": "birthtown",
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
          "id": "ts4hmzub",
          "name": "situation",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Married",
              "Single",
              "Divorced",
              "Widowed"
            ]
          }
        },
        {
          "system": false,
          "id": "swnoqbjp",
          "name": "address",
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
          "id": "cxnilkhh",
          "name": "region",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "fgc7psymuzadc54",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "region",
              "state"
            ]
          }
        },
        {
          "system": false,
          "id": "jaahsdwy",
          "name": "recruited",
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
          "id": "lh6lcilf",
          "name": "post",
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
          "id": "omjmzhtk",
          "name": "category",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Agent",
              "Execution",
              "Mastery",
              "Cadre",
              "Executive",
              "Head of Service",
              "Director"
            ]
          }
        },
        {
          "system": false,
          "id": "pvrex2az",
          "name": "department",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "1wcdnbnlhfgexhy",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "code",
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "nv7i1wko",
          "name": "office",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "21jupwmt5suxqxb",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name",
              "department"
            ]
          }
        },
        {
          "system": false,
          "id": "a55swaxi",
          "name": "classification",
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
          "id": "arhjkl76",
          "name": "experience",
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
          "id": "gjp6qqv2",
          "name": "salary",
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
          "id": "b6vgabx7",
          "name": "phone",
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
          "id": "ar3ee2qu",
          "name": "status",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "wrsifjuzpdj924k",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "env5n8pn",
          "name": "photo",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 2242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "muebavps",
          "name": "banks",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "cmxlmftx",
          "name": "childnumber",
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
          "id": "ftankcmc",
          "name": "children",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "es0yzztj",
          "name": "assurance",
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
          "id": "vhp403ft",
          "name": "gender",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Male",
              "Female"
            ]
          }
        },
        {
          "system": false,
          "id": "guveo2sf",
          "name": "father",
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
          "id": "8olp4yo6",
          "name": "mother",
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
          "id": "kylwuts3",
          "name": "files",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 20,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "doj8s4r2",
          "name": "documents",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "1gxqptid",
          "name": "lastnameAR",
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
          "id": "od8vvqhn",
          "name": "firstnameAR",
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
      "indexes": [
        "CREATE INDEX `_9imbmzhylom3te5_created_idx` ON `employees` (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_h93bgn6b\" on \"employees\" (\"empID\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "e9ijvb4a8dd9rop",
      "created": "2023-03-08 12:46:49.444Z",
      "updated": "2023-03-28 11:59:09.107Z",
      "name": "notifications",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "it9elz9i",
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
      "indexes": [
        "CREATE INDEX `_e9ijvb4a8dd9rop_created_idx` ON `notifications` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "fgc7psymuzadc54",
      "created": "2023-03-08 12:48:26.839Z",
      "updated": "2023-03-28 11:59:09.107Z",
      "name": "regions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "udapn2k6",
          "name": "region",
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
          "id": "2ltrhbij",
          "name": "state",
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
      "indexes": [
        "CREATE INDEX `_fgc7psymuzadc54_created_idx` ON `regions` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "q58a9vvxuqutr4s",
      "created": "2023-03-08 12:48:52.079Z",
      "updated": "2023-06-21 12:50:44.937Z",
      "name": "projects",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "uuoe0x1f",
          "name": "code",
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
          "id": "t5mirqgr",
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
          "id": "wenkkoc8",
          "name": "type",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "g5r2uz3e8mxufdw",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "sm8avrkp",
          "name": "buildingOwner",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "5eoow5466capalf",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "ghcq3odj",
          "name": "supervisor",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "5eoow5466capalf",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "ks1zysm7",
          "name": "location",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "rqjn6f1eemot9q5",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "zlymyjjo",
          "name": "startDate",
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
          "id": "bv4gyv28",
          "name": "endDate",
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
          "id": "8wqfoe94",
          "name": "apEtudes",
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
          "id": "tddqkel2",
          "name": "apTravaux",
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
          "id": "eait3xmu",
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
          "id": "qkuvmxkz",
          "name": "status",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "wrsifjuzpdj924k",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        },
        {
          "system": false,
          "id": "dmsiebgj",
          "name": "locationMaps",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "xthla7ep",
          "name": "geojson",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [
        "CREATE INDEX `_q58a9vvxuqutr4s_created_idx` ON `projects` (`created`)",
        "CREATE UNIQUE INDEX `idx_nmUW8vs` ON `projects` (`code`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "1wcdnbnlhfgexhy",
      "created": "2023-03-08 14:32:23.160Z",
      "updated": "2023-03-28 11:59:09.109Z",
      "name": "departments",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "wey0cbxc",
          "name": "code",
          "type": "text",
          "required": false,
          "unique": true,
          "options": {
            "min": 2,
            "max": 10,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "whxnx61d",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_1wcdnbnlhfgexhy_created_idx` ON \"departments\" (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_wey0cbxc\" on \"departments\" (\"code\")",
        "CREATE UNIQUE INDEX \"idx_unique_whxnx61d\" on \"departments\" (\"name\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "wrsifjuzpdj924k",
      "created": "2023-03-10 19:54:11.403Z",
      "updated": "2023-06-05 14:59:39.458Z",
      "name": "status",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "xzptihqm",
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
          "id": "av0kwjf3",
          "name": "type",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Employee",
              "Project",
              "Client",
              "Consultant"
            ]
          }
        },
        {
          "system": false,
          "id": "emx0fc9e",
          "name": "level0",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "ivjholey",
          "name": "color",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "primary",
              "secondary",
              "success",
              "info",
              "warning",
              "danger"
            ]
          }
        },
        {
          "system": false,
          "id": "azmws8wa",
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
      "indexes": [
        "CREATE INDEX `_wrsifjuzpdj924k_created_idx` ON `status` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "3beskc7gaenibct",
      "created": "2023-03-14 13:31:09.096Z",
      "updated": "2023-03-28 11:59:09.110Z",
      "name": "contracts",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "cs71imfu",
          "name": "employee",
          "type": "relation",
          "required": false,
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
          "required": false,
          "unique": true,
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
          "required": false,
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
          "required": false,
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
          "id": "yjbjkyqs",
          "name": "classification",
          "type": "relation",
          "required": false,
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
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_3beskc7gaenibct_created_idx` ON `contracts` (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_z6tdrcjg\" on \"contracts\" (\"refID\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "wfmx122bg7k07mk",
      "created": "2023-03-19 09:20:49.718Z",
      "updated": "2023-03-28 11:59:09.111Z",
      "name": "documents",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "cms35kcc",
          "name": "employee",
          "type": "relation",
          "required": false,
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
          "id": "rs1yvjml",
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
          "id": "mgylh0aj",
          "name": "file",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        },
        {
          "system": false,
          "id": "ihzpbyh2",
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
      "indexes": [
        "CREATE INDEX `_wfmx122bg7k07mk_created_idx` ON `documents` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "55nnnxcf21trtdk",
      "created": "2023-03-19 14:18:15.195Z",
      "updated": "2023-03-28 11:59:09.113Z",
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
          "required": false,
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
          "required": false,
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
          "required": false,
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
          "required": false,
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
      "indexes": [
        "CREATE INDEX `_55nnnxcf21trtdk_created_idx` ON `classifications` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "21jupwmt5suxqxb",
      "created": "2023-03-21 09:54:14.039Z",
      "updated": "2023-03-28 11:59:09.117Z",
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
          "id": "vqfpv8ul",
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
      "indexes": [
        "CREATE INDEX `_21jupwmt5suxqxb_created_idx` ON `locations` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "h3ewdh4n7421kh3",
      "created": "2023-03-23 10:22:32.389Z",
      "updated": "2023-03-28 11:59:09.118Z",
      "name": "decisions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "rliiiw78",
          "name": "employee",
          "type": "relation",
          "required": false,
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
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Promotion",
              "Sanction",
              "Other"
            ]
          }
        },
        {
          "system": false,
          "id": "fadxdsoi",
          "name": "refID",
          "type": "text",
          "required": false,
          "unique": true,
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
          "required": false,
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
        },
        {
          "system": false,
          "id": "vxrc1jes",
          "name": "file",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_h3ewdh4n7421kh3_created_idx` ON `decisions` (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_fadxdsoi\" on \"decisions\" (\"refID\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "zqf64pwcogih72d",
      "created": "2023-03-23 15:11:43.588Z",
      "updated": "2023-03-28 11:59:09.119Z",
      "name": "missions",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "aaezebcl",
          "name": "employee",
          "type": "relation",
          "required": false,
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
          "id": "ovhefabh",
          "name": "refID",
          "type": "text",
          "required": false,
          "unique": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "oj4gtn5h",
          "name": "destination",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "fgc7psymuzadc54",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "region",
              "state"
            ]
          }
        },
        {
          "system": false,
          "id": "v1wap8ax",
          "name": "purpose",
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
          "id": "fdcsisrw",
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
          "id": "kcminpmw",
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
          "id": "axghudi1",
          "name": "transport",
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
          "id": "gt9xa2pj",
          "name": "status",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Pending",
              "Started",
              "Completed"
            ]
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_zqf64pwcogih72d_created_idx` ON `missions` (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_ovhefabh\" on \"missions\" (\"refID\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "8f36vqrjl3tbnit",
      "created": "2023-03-23 15:57:47.965Z",
      "updated": "2023-03-28 11:59:09.120Z",
      "name": "trainings",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "7wu0ay8a",
          "name": "employee",
          "type": "relation",
          "required": false,
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
          "id": "wnclxtdc",
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
          "id": "n1plwg1c",
          "name": "provider",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "t094d78bdlgnflz",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "uro9s8gj",
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
          "id": "tlgub7qz",
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
          "id": "8w46uy6b",
          "name": "cost",
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
          "id": "uurokvjk",
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
          "id": "2zwvogdg",
          "name": "status",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Pending",
              "Started",
              "Completed"
            ]
          }
        },
        {
          "system": false,
          "id": "cyvzkzyp",
          "name": "file",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_8f36vqrjl3tbnit_created_idx` ON `trainings` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "t094d78bdlgnflz",
      "created": "2023-03-23 15:58:05.545Z",
      "updated": "2023-03-28 11:59:09.120Z",
      "name": "providers",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "fk4gpzal",
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
          "id": "ihgucyvh",
          "name": "nif",
          "type": "text",
          "required": false,
          "unique": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [
        "CREATE INDEX `_t094d78bdlgnflz_created_idx` ON `providers` (`created`)",
        "CREATE UNIQUE INDEX \"idx_unique_ihgucyvh\" on \"providers\" (\"nif\")"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "z0zyj5vgsvcdj5r",
      "created": "2023-03-25 15:33:07.408Z",
      "updated": "2023-03-28 11:59:09.121Z",
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
        },
        {
          "system": false,
          "id": "5xu46xw3",
          "name": "root",
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
      "indexes": [
        "CREATE INDEX `_z0zyj5vgsvcdj5r_created_idx` ON `modules` (`created`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "wqwzjqcjio1wtp6",
      "created": "2023-03-31 16:44:08.043Z",
      "updated": "2023-07-04 12:29:20.285Z",
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
              "Box",
              "Book",
              "Document",
              "Letter"
            ]
          }
        },
        {
          "system": false,
          "id": "al2axr5c",
          "name": "received",
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
          "id": "ec1pydj3",
          "name": "local",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "21jupwmt5suxqxb",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "gfm08ilx",
          "name": "shelf",
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
        },
        {
          "system": false,
          "id": "foytbi6m",
          "name": "file",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "5eoow5466capalf",
      "created": "2023-05-31 13:05:20.618Z",
      "updated": "2023-06-05 11:09:20.181Z",
      "name": "organisms",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "9thhvhw1",
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
          "id": "vz5h7ugq",
          "name": "type",
          "type": "select",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "Maître d'ouvrage",
              "Gestionnaire",
              "Bureau d'études",
              "Entreprise de réalisation"
            ]
          }
        },
        {
          "system": false,
          "id": "ffztqdb8",
          "name": "country",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "20j7zspfuru0b5f",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "l3xtfwlr",
          "name": "address",
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
          "id": "qwbt7udy",
          "name": "phone",
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
          "id": "hbjc02uc",
          "name": "fax",
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
          "id": "gjpbbg7x",
          "name": "email",
          "type": "email",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        },
        {
          "system": false,
          "id": "5g93fdfs",
          "name": "website",
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
          "id": "k0kygxtm",
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
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "e3xa8lcnng0o742",
      "created": "2023-05-31 14:42:11.689Z",
      "updated": "2023-06-05 08:33:10.561Z",
      "name": "sectors",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "dsvdkjar",
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
      "indexes": [
        "CREATE UNIQUE INDEX `idx_IMbdTw6` ON `sectors` (`name`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "g5r2uz3e8mxufdw",
      "created": "2023-05-31 14:43:24.741Z",
      "updated": "2023-06-05 13:14:45.944Z",
      "name": "projectTypes",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "r1z5tsyy",
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
          "id": "vvonzj8a",
          "name": "sector",
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
          "id": "8xtoc3so",
          "name": "sector2",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "e3xa8lcnng0o742",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": []
          }
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_zHdT4IB` ON `projectTypes` (`name`)"
      ],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "buwfg55vsxdacix",
      "created": "2023-05-31 15:08:41.810Z",
      "updated": "2023-06-30 10:03:52.678Z",
      "name": "projectEntries",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "mlh2p22s",
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
          "id": "jiy1hllk",
          "name": "type",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "collectionId": "wrsifjuzpdj924k",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": [
              "description"
            ]
          }
        },
        {
          "system": false,
          "id": "co5s0fre",
          "name": "code",
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
          "id": "daue838v",
          "name": "date",
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
          "id": "btrwfube",
          "name": "received",
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
          "id": "4albsvxc",
          "name": "progress",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "oogeydzn",
          "name": "observation",
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
          "id": "wfp4fwti",
          "name": "recommendation",
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
          "id": "wawhng4o",
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
          "id": "kva5f92t",
          "name": "files",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 99,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "20j7zspfuru0b5f",
      "created": "2023-06-05 10:28:17.055Z",
      "updated": "2023-06-05 10:31:39.158Z",
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
          "name": "continent",
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
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "rqjn6f1eemot9q5",
      "created": "2023-06-05 14:19:26.532Z",
      "updated": "2023-06-05 14:44:51.894Z",
      "name": "wilayas",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "blehz1xp",
          "name": "code",
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
          "id": "prvdlbcp",
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
          "id": "1ytkgmkv",
          "name": "nameAR",
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
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "d54bxic5zh2nbuq",
      "created": "2023-06-11 09:29:46.415Z",
      "updated": "2023-06-18 15:00:24.883Z",
      "name": "projectSpecs",
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
        },
        {
          "system": false,
          "id": "frmgm47k",
          "name": "history",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "heg4k0g6m0me6gs",
      "created": "2023-06-11 10:27:05.663Z",
      "updated": "2023-06-20 15:57:10.407Z",
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
        },
        {
          "system": false,
          "id": "dlauw0u1",
          "name": "code",
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
          "id": "khbb46qr",
          "name": "enterprise",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "collectionId": "5eoow5466capalf",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": [
              "name"
            ]
          }
        },
        {
          "system": false,
          "id": "ykzxyfwc",
          "name": "amount",
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
          "id": "t8nlyomb",
          "name": "period",
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
          "id": "rysiptpl",
          "name": "startDate",
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
          "id": "5vwb3p2y",
          "name": "endDate",
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
          "id": "ldgrllun",
          "name": "history",
          "type": "json",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "hq0rabvz",
          "name": "financialRate",
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
          "id": "mk8fvmws",
          "name": "physicalRate",
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
          "id": "vdzg07gp",
          "name": "periodRate",
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
          "id": "qowefjsd",
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
          "id": "ebx23xsu",
          "name": "files",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 999,
            "maxSize": 5242880000,
            "mimeTypes": [],
            "thumbs": [],
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    },
    {
      "id": "wt728dblv516bnv",
      "created": "2023-06-13 12:44:09.082Z",
      "updated": "2023-06-13 12:44:27.495Z",
      "name": "terms",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "txdgrdbs",
          "name": "content",
          "type": "editor",
          "required": true,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id != \"\"",
      "viewRule": "@request.auth.id != \"\"",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id != \"\"",
      "deleteRule": "@request.auth.id != \"\"",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
