'use strict';

var Team = require('../models/team-model.js')
, success = require('../models/success-response-model')
, ctrl = {};

ctrl.findAll = function(req, res){
  Team.findAll()
  .then(function(team){
    new success.FindMany(team).send(req, res);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

ctrl.findById = function(req, res){
  Team.findById(req.params.id)
  .then(function(team){
    new success.FindOne(team).send(req, res)
  })
  .catch(function(err){
    res.status(404).send(err)
  });
};

ctrl.save = function(req, res){
  Team.save(req.body)
  .then(function(team){
    new success.Inserted(student._id).send(req, res);
  })
  .catch(function(err){
    res.status(401).send(err);
  })
};

ctrl.update = function(req, res){
  var team = req.body;
      team._id = req.params.id;

  Team.update(team)
  .then(function(data){
    new success.Updated(team._id).send(req, res);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

ctrl.remove = function(req, res){
  Team.remove(req.params.id)
  .then(function(data){
    new success.Removed().send(req, res);
  })
  .catch(function(err){
    res.status(500).send(err);
  });
};

module.exports = ctrl;
