'use strict';

angular.module('edit')
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state('edit', {
                url: '/edit/:id',
                templateUrl: 'app/modules/edit/templates/edit.view.html',
                controller: 'editCtrl'
            })
            .state('add', {
                url: '/add',
                templateUrl: 'app/modules/edit/templates/edit.view.html',
                controller: 'addCtrl'
            });

    }]);
