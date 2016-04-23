'use strict';

angular.module('home')
    .controller('homeCtrl', ['$scope', '$localStorage', 'employeesService', homeController])

function homeController($scope, $localStorage, employeesService) {

    $scope.loggedInEmp = "";
    $scope.employees = [];

    employeesService.getEmployees().then(function(res) {
        $scope.employees = res;
        $scope.loggedInEmp = res.filter(function(e) {return e._id == $localStorage.user._id })[0];
    });

};
