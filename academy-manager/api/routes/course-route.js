'use strict';

var express = require('express')
, route = express.Router()
, ctrl = require('../controllers/course-controller');

// Get em </courses> -- Lista todos os cursos
route.get('/courses', ctrl.findAll);
// Get em </courses/id> -- lista um determinado curso
route.get('/courses/:id', ctrl.findById);
// Post em </courses> -- insere um determinado curso
route.post('/courses', ctrl.save);
// Put em </courses/id> -- atualiza um determinado curso
route.put('/courses/:id', ctrl.update);
// Delete em </courses/id> -- deleta um determinado curso
route.delete('/courses/:id', ctrl.remove);

module.exports = route;
