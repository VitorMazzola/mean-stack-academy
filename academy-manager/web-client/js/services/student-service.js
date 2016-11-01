(function(angular) {
  'use strict';

  angular.module('am').factory('studentService', service);

  service.$inject = ['$http', '$q', 'api']

  function service($http, $q, api){
    var srv = {};

    function defaultRequestCallback(request, resolve, reject){
      request
      .success(function(resp){
        resolve(resp);
      })
      .error(function(err){
        reject(err);
      });
    }

    srv.getAll = function() {
      return $q(function(resolve, reject){
        var request = $http.get(api.students);
        defaultRequestCallback(request, resolve, reject);
      });
    };

    srv.getById = function(id) {
      return $q(function(resolve, reject) {
        $http.get(api.students + id)
          .success(function(resp) {
            resp.data.birthDate = resp.data.birthDate ? new Date(resp.data.birthDate) : null;
            resolve(resp);
          })
          .error(function(resp) {
            reject(resp);
          });
      });
    };

    srv.save = function (student){
      return $q(function(resolve, reject){
        var request = null;
        if (student._id) {
          request = $http.put(api.students + student._id, student);
        }else{
          request = $http.post(api.students, student)
        }
        defaultRequestCallback(request, resolve, reject);
      });
    };

    srv.remove = function (id){
      return $q(function(resolve, reject){
        var request = $http.delete(api.students + id);
        defaultRequestCallback(request, resolve, reject);
      });
    };

    return srv;
  }

})(angular);
