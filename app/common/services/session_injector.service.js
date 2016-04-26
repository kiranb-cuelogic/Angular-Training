'use strict';

angular.module('services')
    .factory('sessionInjectorService', ['$localStorage', '$location', sessionInjectorService]);

function sessionInjectorService($localStorage, $location) {

    return {
        request: function(config) {
            config.headers = config.headers || {};
            if (angular.isDefined($localStorage.token)) {
                config.headers.Authorization = $localStorage.token;
            } else {
                $location.path('/login');
            }
            return config;
        }
    };

};
