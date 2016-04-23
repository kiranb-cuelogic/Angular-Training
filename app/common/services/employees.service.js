'use strict';

angular.module('services').service('employeesService', ['$http', '$q', '$location', employeesService]);

function employeesService($http, $q, $location) {

    var service = {};
    service.getEmployees = getEmployees;

    return service;

    function getEmployees() {
        var deferredP = $q.defer();
        $http({
                method: 'GET',
                url: $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/app/common/services/employeeJson.json'
            })
            .success(function(data) {
                if (!(data == undefined)) {
                    deferredP.resolve(data);
                } else {
                    deferredP.reject("not found");
                }
            })
            .error(function(data) {
                deferredP.reject("error occured");
            });

        return deferredP.promise;

    };

};
