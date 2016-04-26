'use strict';

angular.module('services').service('employeesService', ['$http', '$q', '$location', '$localStorage', employeesService]);

function employeesService($http, $q, $location, $localStorage) {

    var service = {};

    service.getEmp = getEmp;
    service.setEmp = setEmp;
    service.addEmp = addEmp;
    service.delEmp = delEmp;

    return service;

    function getEmp() {
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

    function setEmp(obj) {
        return $localStorage.empList;
    }

    function addEmp(obj) {
        var _id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 24);
        obj._id = _id
        $localStorage.empList.push(obj)
        return $localStorage.empList;
    }

    function delEmp(obj) {
        var arr = _.reject(_.reject($localStorage.empList, ['_id', $localStorage.user._id.toString()]), ['_id', obj]);
        $localStorage.empList = arr;
        return arr;
    }

};
