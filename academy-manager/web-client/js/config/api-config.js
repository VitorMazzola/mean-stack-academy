(function(angular) {
  'use strict';
  var BASE_API_PATH = 'http://localhost:3000/api/v1/'
    , api = {
        userProfile : buildResourceUrl('user/profile')
      , students : buildResourceUrl('students')
      , courses: buildResourceUrl('courses')
      };

  function buildResourceUrl(name) {
    return BASE_API_PATH + name + '/';
  }

  angular.module('am').constant('api', api);

})(angular);
