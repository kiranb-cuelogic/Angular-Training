'use strict';

angular.module('home')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/modules/home/templates/home.view.html',
                controller: 'homeCtrl'
            });
    }]);
