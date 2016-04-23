'use strict';

// Declare app level module which depends on views, and components
angular.module('angularTraining', [
    'ngRoute',
    'ngStorage',
    'providers',
    'services',
    'directives',
    'login',
    'home',
    'user'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/login' });
}]);
