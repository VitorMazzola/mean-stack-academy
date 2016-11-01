'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/team-controller');

route.get('/teams', ctrl.findAll);
route.get('/teams/:id', ctrl.findById);
route.post('/teams', ctrl.save);
route.put('/teams/:id', ctrl.update);
route.delete('/teams/:id', ctrl.remove);

module.exports = route;
