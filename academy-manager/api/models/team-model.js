'use strict';

var mongoose = require('mongoose')
  , schemaTeam = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, trim: true },
    description: { type: mongoose.Schema.Types.String, required: true, trim: true }
  })
  , Team = mongoose.model('Team', schemaTeam);

module.exports.findAll = function findAll(){
  return new Promise(function(reject, resolve){
    Team.find(function(err, data){
      if(err) reject(err);
      resolve(data);
    });
  });
}
