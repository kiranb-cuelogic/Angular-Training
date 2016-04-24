'use strict';

angular.module('edit')
    .config(['$routeProvider', function($routeProvider) {
        
        $routeProvider
        .when('/edit/:_id', {
            templateUrl: 'app/modules/edit/templates/edit.view.html',
            controller: 'editCtrl'
        })
        .when('/add', {
            templateUrl: 'app/modules/edit/templates/edit.view.html',
            controller: 'addCtrl'
        });
        
    }]);