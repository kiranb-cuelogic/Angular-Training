'use strict';

angular.module('edit')
    .controller('addCtrl', ['$scope', '$state', 'employeesService', AddController]);

function AddController($scope, $state, employeesService) {
    $scope.state = $state.current.name;
    $scope.addEmp = addEmp;

    function addEmp(obj) {

        var employees;
        employees = employeesService.addEmp(obj);
        $state.go('home');
        
    };

};
