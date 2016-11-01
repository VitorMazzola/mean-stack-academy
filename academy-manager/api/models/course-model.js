'use strict';

var mongoose = require('mongoose')
  , courseSchema = new mongoose.Schema({
      name: { type: mongoose.Schema.Types.String, required: true, trim: true },
      description: { type: mongoose.Schema.Types.String, required: true, trim: true },
      investiment: { type: mongoose.Schema.Types.Number, required: true }
    })
  , Course = mongoose.model('Course', courseSchema);

/**
 * Find all Courses
 * @return {Promise}
 */
module.exports.findAll = function findAll() {
  return new Promise(function(resolve, reject){
    Course.find(function(err, data){
      if(err) reject(err);
      resolve(data);
    });
  });
};

/**
 * Find Course by _ID
 * @param  {String} courseId [required] ObjectId
 * @return {Promise}
 */
module.exports.findById = function findById(courseId) {
  return new Promise(function(resolve, reject){
    let query =  { _id: courseId };
    Course.findOne(query, function(err, data){
      if(err) reject(err);
      resolve(data);
    });
  });
};

/**
 * Insert Course
 * @param  {Student} course [required]
 * @return {Prmise}
 */
module.exports.save = function save(course) {
   return new Promise(function(resolve, reject){
     new Course(course).save(function(err, data){
       if(err) reject(err);
       resolve(data);
     });
   });
};

/**
 * Modify Course
 * @param  {Student} course [required]
 * @return {Primise}
 */
module.exports.update = function update(course) {
  return new Promise(function(resolve, reject){
    let query = { _id: course._id};
    Course.update(query, course, function(err, data){
      if(err) reject(err);
      resolve(data);
    });
  });
};

/**
 * Inactivate Course by _ID
 * @param  {String} courseId [required] ObjectId
 * @return {Promise}
 */
module.exports.remove = function remove(courseId) {
  return new Promise(function(resolve, reject){
    let query =  { _id: courseId};
    Course.remove(query, function(err, data){
      if(err) reject(err);
      resolve(data);
    });
  });
};
