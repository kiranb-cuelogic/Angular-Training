'use strict';

angular.module('user')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'app/modules/user/templates/user.view.html',
    controller: 'userCtrl'
  });
}]);