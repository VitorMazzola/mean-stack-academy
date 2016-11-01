'use strict';

var db = require('./config/db-config')
  , express = require('express')
  , bodyParser = require('body-parser')
  , studentRoute = require('./routes/student-route')
  , routeConfig = require('./config/route-config')
  , i18n = require('./filters/i18n-filter')
  , basicAuth = require('./filters/basic-auth-filter')
  , errorHandler = require('./filters/error-filter')
  , cors = require('cors')
  , app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(i18n);

app.use(basicAuth);

routeConfig.configApiRoutes(app);

app.use(errorHandler);

module.exports = app;
