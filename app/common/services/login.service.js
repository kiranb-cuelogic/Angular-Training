'use strict';

angular
    .module('services')
    .service('loginService', ['credentials', '$localStorage', loginService]);

function loginService(credentials, $localStorage) {

    var service = {};
    service.validateUser = validateUser;

    return service;

    function validateUser(user) {

        var isValid = credentials.get().findIndex(i => i.email === user.email && i.password === user.password);

        if (isValid != -1) {
        	$localStorage.user = credentials.get()[isValid];
            return true;
        } else {
            return false;
        }


    }


};
