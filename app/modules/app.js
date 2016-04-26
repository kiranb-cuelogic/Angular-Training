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
    .config(['$urlRouterProvider', '$httpProvider', function($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/login');
        $httpProvider.interceptors.push('sessionInjectorService');
    }])

.run(function($rootScope, $state, $localStorage) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, from, fromParams) {

        if (!angular.isDefined($localStorage.token)) {
            if (toState.name != 'login') {
                event.preventDefault();
                $state.go('login');
            }
        } else {
            if (toState.name == 'login') {
                event.preventDefault();
                $state.go('home');
            }
        }

    });

});
