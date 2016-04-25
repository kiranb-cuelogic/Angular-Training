'use strict';

angular
    .module('services')
    .service('loginService', ['credentials', '$localStorage', 'employeesService', loginService]);

function loginService(credentials, $localStorage, employeesService) {

    var service = {};
    service.validateUser = validateUser;

    return service;

    function validateUser(user) {

        var isValid = credentials.get().findIndex(i => i.email === user.email && i.password === user.password);

        if (isValid != -1) {
            
        	$localStorage.user = employeesService.getLoggedInEmp(user.email);
            
            return true;
        } else {
            return false;
        }


    }


};
