(function(angular) {
  'use strict';

  angular.module('am').controller('LoginCtrl', controller);

  controller.$inject = ['UserService', '$window'];

  function controller(userService, $window) {
    var ctrl = this;

    ctrl.init = function(){
      userService.clearCredentials();
      ctrl.invalidLogin = false;
      ctrl.user = {};
    }

    ctrl.login = function(user){
      userService.login(user)
      .then(function(){
        $window.location.href = 'index';
      })
      .catch(function(){
        console.log('akii');
        ctrl.invalidLogin = true;
      });
    };

    return ctrl;
  }

})(angular);
