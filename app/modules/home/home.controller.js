'use strict';

angular.module('home')
    .controller('homeCtrl', ['$scope', '$localStorage', '$location', 'employeesService', HomeController])

function HomeController($scope, $localStorage, $location, employeesService) {

    $scope.loggedInEmp = "";
    $scope.employees = [];
    $scope.editEmployee = editEmployee;

    employeesService.getEmp().then(function(res) {
            $scope.employees = res;
            $scope.loggedInEmp = res.filter(function(e) {
                return e._id == $localStorage.user._id
            })[0];
        })
        .catch(function(msg) {
            console.log(msg);
        });

    function editEmployee(id) {
        $location.path('/edit/' + id);
    }

    $scope.$on('update-empList', function(event, data) {
        $scope.employees = data;
    });

};
