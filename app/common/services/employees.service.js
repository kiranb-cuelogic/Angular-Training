'use strict';

angular.module('services').service('employeesService', ['$http', '$q', '$location', '$timeout', '$localStorage', employeesService]);

function employeesService($http, $q, $location, $timeout, $localStorage) {

    var service = {},
        empList = empList = [{
            "_id": "1",
            "age": 24,
            "name": "ki bangale",
            "gender": "female",
            "email": "ki@gmail.com",
            "phone": "+1 (876) 433-3061",
            "address": "Kothrud, Pune"
        }, {
            "_id": "2",
            "age": 24,
            "name": "kiran bangale",
            "gender": "female",
            "email": "kiran.bangale@cuelogic.co.in",
            "phone": "+1 (876) 433-3062",
            "address": "Kothrud, Pune"
        }, {
            "_id": "3",
            "age": 24,
            "name": "kiran bangale",
            "gender": "female",
            "email": "kiranbangale@gmail.com",
            "phone": "+1 (876) 433-3063",
            "address": "Kothrud, Pune"
        }, {
            "_id": "571b5e4303351b2621de296f",
            "age": 28,
            "name": "Gladys Barber",
            "gender": "female",
            "email": "gladysbarber@recrisys.com",
            "phone": "+1 (876) 433-3069",
            "address": "158 Grimes Road, Forestburg, Virginia, 9963"
        }, {
            "_id": "571b5e4398bb3038e1fe9a3a",
            "age": 40,
            "name": "Jody Spears",
            "gender": "female",
            "email": "jodyspears@recrisys.com",
            "phone": "+1 (876) 546-2538",
            "address": "526 Hyman Court, Breinigsville, Washington, 9269"
        }, {
            "_id": "571b5e43fd0639218eac959d",
            "age": 31,
            "name": "Ramirez Sheppard",
            "gender": "male",
            "email": "ramirezsheppard@recrisys.com",
            "phone": "+1 (850) 503-2466",
            "address": "907 Malta Street, Gorst, Oregon, 6305"
        }, {
            "_id": "571b5e43d5e025754db3a6e1",
            "age": 23,
            "name": "Mable Ortiz",
            "gender": "female",
            "email": "mableortiz@recrisys.com",
            "phone": "+1 (868) 509-2658",
            "address": "287 Woodhull Street, Vincent, Mississippi, 174"
        }];

    service.getLoggedInEmp = getLoggedInEmp;
    service.getEmp = getEmp;
    service.setEmp = setEmp;
    service.addEmp = addEmp;
    service.delEmp = delEmp;

    return service;

    function getLoggedInEmp(obj) {
        var loggedInEmp = {};
        
        loggedInEmp = empList.filter(function(e) {return e.email == obj })[0];

        return loggedInEmp;
    };

    function getEmp() {
        var deferredP = $q.defer();
        // $http({
        //         method: 'GET',
        //         url: $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/app/common/services/employeeJson.json'
        //     })
        //     .success(function(data) {
        //         if (!(data == undefined)) {
        //             deferredP.resolve(data);
        //         } else {
        //             deferredP.reject("not found");
        //         }
        //     })
        //     .error(function(data) {
        //         deferredP.reject("error occured");
        //     });

        var arr = _.reject(empList, ['_id', $localStorage.user._id.toString()]);
        empList = arr;

        $timeout(function() {
            deferredP.resolve(empList);
        }, 100);

        return deferredP.promise;
    };

    function setEmp(obj) {
        return empList;
    }

    function addEmp(obj) {
        var _id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 24);
        obj._id = _id
        empList.push(obj)
        return empList;
    }

    function delEmp(obj) {
        var arr = _.reject(empList, ['_id', obj]);
        empList = arr;
        return empList;
    }

};
