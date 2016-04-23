'use strict';

angular.module('home')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/modules/home/templates/home.view.html',
            controller: 'homeCtrl'
        });
    }]);