'use strict';

var http = require('http')
, app = require('../app')
, env = require('../config/env-config')
, debug = require('debug')(env.appName + ':http');


var httpServer = http.createServer(app);

httpServer.listen(env.port, function(){
  debug('Servidor escutando na porta ' + env.port);
});
