'use strict';

angular.module('login')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'app/modules/login/templates/login.view.html',
            controller: 'loginCtrl'
        });
    }]);