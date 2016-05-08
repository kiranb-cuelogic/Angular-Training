'use strict';

angular
    .module('services')
    .service('loginService', ['credentials', '$localStorage', 'employeesService', loginService]);

function loginService(credentials, $localStorage, employeesService) {

    var service = {};
    service.validateUser = validateUser;

    return service;

    function validateUser(user) {

        var isValid = credentials.get().findIndex(i = i.email === user.email && i.password === user.password);

        if (isValid != -1) {
            // $localStorage.token = { 'authenticated': true };

            // employeesService.getEmp().then(function(res) {
            //         $localStorage.user = res.filter(function(e) {
            //             return e.email == user.email
            //         })[0];
            //         $localStorage.empList = _.reject(res, ['_id', $localStorage.user._id.toString()]);;
            //     })
            //     .catch(function(msg) {
            //         console.log(msg);
            //     });

            return true;
        } else {
            return false;
        }

    };

};
