'use strict';

var success = {}
  , debug = require('../config/debug-config')('api:success');

function send(req, res){
  this.messages = [];

  if(this.messageIds){
    for (var i = 0; i < this.messageIds.length; i++) {
      let _messageIds = this.messageIds[i];
      this.messages.push(req.getMessage(_messageIds));
    }
  }
  debug(this);
  res.status(this.statusCode || 500).json(this);
}

success.Inserted = function(id){
  this.data = id;
  this.messageIds = ['record-success-inserted'];
  this.statusCode = 201;
  this.send = send;
};

success.Updated = function(id){
  this.data = id;
  this.messageIds = ['record-success-updated'];
  this.statusCode = 200;
  this.send = send;
};

success.Removed = function(id){
  this.messageIds = ['record-success-removed'];
  this.statusCode = 200;
  this.send = send;
};

success.FindOne = function(data){
  this.data = data;
  this.statusCode = 200;
  this.send = send;
};

success.FindMany = function(data){
  this.data = data;
  this.statusCode = 200;
  this.send = send;
};

module.exports = success;
