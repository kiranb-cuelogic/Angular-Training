'use strict';

angular.module('login')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/modules/login/templates/login.view.html',
                controller: 'loginCtrl'
            })
            .state('logout', {
                url: '/logout',
                templateUrl: 'app/modules/login/templates/login.view.html'
            });
    }]);
