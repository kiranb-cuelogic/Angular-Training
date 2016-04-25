'use strict';

angular.module('home')
    .controller('homeCtrl', ['$scope', '$localStorage', '$state', '$filter', 'employeesService', HomeController])

function HomeController($scope, $localStorage, $state, $filter, employeesService) {

    var orderBy = $filter('orderBy');

    $scope.loggedInEmp = $localStorage.user.name;

    $scope.employees = [];
    $scope.sortOpts = ['name', 'email', 'age', 'gender'];

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

    function order(predicate) {
        $scope.predicate = predicate;
        $scope.employees = orderBy($scope.employees, predicate, false);
    };

    $scope.order("name")
};
