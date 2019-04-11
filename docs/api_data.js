define({ "api": [  {    "type": "get",    "url": "/api/songs/:id",    "title": "DELETE Song",    "name": "DeleteQueue",    "group": "Queue",    "description": "<p>Deletes a song from the queue with the given ID in the URL body</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body",            "description": "<p>The song that has been successfully deleted</p>"          }        ]      }    },    "error": {      "fields": {        "404": [          {            "group": "404",            "optional": false,            "field": "BadRequest",            "description": "<p>The song with the given ID wasn't found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/songs.js",    "groupTitle": "Queue"  },  {    "type": "get",    "url": "/api/songs/",    "title": "GET Songs",    "name": "GetQueue",    "group": "Queue",    "description": "<p>Gets all songs in the queue, filters the first N songs by time, then the rest by priority. Updates the song's priorty on each call.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "body",            "description": "<p>list of all songs in the current queue</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/songs.js",    "groupTitle": "Queue"  },  {    "type": "get",    "url": "/api/songs/",    "title": "POST Song",    "name": "PostQueue",    "group": "Queue",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "requestedBy",            "description": "<p>User ID of the user who requested the song</p>"          },          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "song",            "description": "<p>Object of the song received from Spotify</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>Username of the user who requested the song</p>"          }        ]      }    },    "description": "<p>Adds a new song to the current queue. Adds the current logged in user and assigns the user priority to the song priority</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body",            "description": "<p>The song that has successfully been added to the queue</p>"          }        ]      }    },    "error": {      "fields": {        "400": [          {            "group": "400",            "optional": false,            "field": "InvalidBody",            "description": "<p>Validation error details</p>"          }        ],        "404": [          {            "group": "404",            "optional": false,            "field": "UserNotFound",            "description": "<p>The current logged in user was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/songs.js",    "groupTitle": "Queue"  },  {    "type": "delete",    "url": "/api/user/me",    "title": "DELETE User",    "name": "DeleteUser",    "group": "User",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "User",            "description": "<p>that was deleted</p>"          }        ]      }    },    "error": {      "fields": {        "404": [          {            "group": "404",            "optional": false,            "field": "NotFound",            "description": "<p>The user with the given ID was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/users.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/api/user/:id",    "title": "GET User",    "name": "GetUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Users unique ID</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "body",            "description": "<p>User information without sensitive data</p>"          }        ]      }    },    "error": {      "fields": {        "404": [          {            "group": "404",            "optional": false,            "field": "NoUserFound",            "description": "<p>No user found with the given ID</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/api/user/login",    "title": "LOGIN User",    "name": "LoginUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>User inputted username</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User inputted password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "JSON",            "description": "<p>Web Token</p>"          }        ]      }    },    "error": {      "fields": {        "400": [          {            "group": "400",            "optional": false,            "field": "InvalidBody",            "description": "<p>Validation error details</p>"          },          {            "group": "400",            "optional": false,            "field": "BadRequest",            "description": "<p>Incorrect username or password</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/users.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/api/user/",    "title": "POST User",    "name": "PostUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>User inputted username</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User inputted password</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": false,            "field": "isDevice",            "description": "<p>Is the account a device account or not</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "JSON",            "description": "<p>Web Token</p>"          }        ]      }    },    "error": {      "fields": {        "400": [          {            "group": "400",            "optional": false,            "field": "InvalidBody",            "description": "<p>Validation error details</p>"          },          {            "group": "400",            "optional": false,            "field": "BadRequest",            "description": "<p>User is already registered</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/users.js",    "groupTitle": "User"  },  {    "type": "put",    "url": "/api/user/me",    "title": "UPDATE User",    "name": "PutUser",    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>Username of the current user</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>New password for the user</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "User",            "description": "<p>insensitive information</p>"          }        ]      }    },    "error": {      "fields": {        "400": [          {            "group": "400",            "optional": false,            "field": "InvalidBody",            "description": "<p>validation error details</p>"          }        ],        "404": [          {            "group": "404",            "optional": false,            "field": "NotFound",            "description": "<p>The user with the given ID was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "./routes/users.js",    "groupTitle": "User"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./docs/main.js",    "group": "_Users_piercemorris_Documents_BJSSOfficeJukebox_docs_main_js",    "groupTitle": "_Users_piercemorris_Documents_BJSSOfficeJukebox_docs_main_js",    "name": ""  }] });
