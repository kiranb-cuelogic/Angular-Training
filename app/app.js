'use strict';

// Declare app level module which depends on views, and components
angular.module('tandem', [
  'ngRoute',
  'user'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/users'});
}]);
