'use strict';

var Course = require('../models/course-model')
  , success = require('../models/success-response-model')
  , ctrl = {};

  ctrl.findAll = function(req, res){
    Course.findAll()
    .then(function(courses){
      new success.FindMany(courses).send(req, res);
    })
    .catch(function(err){
      res.status(500).send(err);
    });
  };

  ctrl.findById = function(req, res){
    Course.findById(req.params.id)
    .then(function(course){
      new success.FindOne(course).send(req, res);
    })
    .catch(function(err){
      res.status(404).send(err);
    })
  };

  ctrl.save = function(req, res){
    Course.save(req.body)
    .then(function(course){
      new success.Inserted(course._id).send(req, res);
    })
    .catch(function(err){
      res.status(401).send(err);
    })
  };

  ctrl.update = function(req, res){
    var course = req.body;
    course._id = req.params.id;

    Course.update(course)
    .then(function(data){
      new success.Updated(course._id).send(req, res);
    })
    .catch(function(err){
      res.status(500).send(err);
    });
  };

  ctrl.remove = function(req, res){
    Course.remove(req.params.id)
    .then(function(data){
        new success.Removed().send(req, res);
    })
    .catch(function(err){
      res.status(500).send(err);
    });
  };

module.exports = ctrl;
