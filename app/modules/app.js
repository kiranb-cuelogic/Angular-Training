'use strict';

// Declare app level module which depends on views, and components
angular.module('angularTraining', [
    'ngRoute',
    'ngStorage',
    'ngMessages',
    'ngAnimate',
    'ui.bootstrap',
    'providers',
    'services',
    'directives',
    'login',
    'home',
    'edit',
    'user'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/login' });
}]);
