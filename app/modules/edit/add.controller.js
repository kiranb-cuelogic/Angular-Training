'use strict';

angular.module('edit')
    .controller('addCtrl', ['$scope', '$location', 'employeesService', AddController]);

function AddController($scope, $location, employeesService) {
    $scope.state = 'add';
    $scope.addEmp = addEmp;

    function addEmp(obj) {
        var employees;

        employees = employeesService.addEmp(obj);
        $location.path('/home');
    };

};
