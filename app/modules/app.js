'use strict';

// Declare app level module which depends on views, and components
angular.module('angularTraining', [
    'ngRoute',
    'ui.router',
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
.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
}]);
