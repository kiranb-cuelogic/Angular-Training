'use strict';

// Declare app level module which depends on views, and components
angular.module('angularTraining', [
    'ngRoute',
    'login',
    'user'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/login' });
}]);
