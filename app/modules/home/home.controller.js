'use strict';

angular.module('home')
    .controller('homeCtrl', ['$scope', '$localStorage', '$location', '$filter', 'employeesService', HomeController])

function HomeController($scope, $localStorage, $location, $filter, employeesService) {

    var orderBy = $filter('orderBy');

    $scope.loggedInEmp = $localStorage.user.name;

    $scope.employees = [];
    $scope.sortOpts = ['name', 'email', 'age', 'gender'];

    $scope.editEmployee = editEmployee;
    $scope.order = order;


    employeesService.getEmp().then(function(res) {
            $scope.employees = res;
        })
        .catch(function(msg) {
            console.log(msg);
        });

    $scope.$on('update-empList', function(event, data) {
        $scope.employees = data;
    });

    function editEmployee(id) {
        $location.path('/edit/' + id);
    }

    function order(predicate) {
        $scope.predicate = predicate;
        $scope.employees = orderBy($scope.employees, predicate, false);
    };

    $scope.order("name")
};
