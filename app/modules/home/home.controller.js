'use strict';

angular.module('home')
    .controller('homeCtrl', ['$scope', '$localStorage', '$state', '$filter', HomeController])

function HomeController($scope, $localStorage, $state, $filter) {

    var orderBy = $filter('orderBy');

    $scope.employees = $localStorage.empList;
    $scope.sortOpts = ['name', 'email', 'age', 'gender'];
    $scope.selectedEmpsId = [];

    $scope.redirect = redirect;
    $scope.selectedEmps = selectedEmps;
    $scope.order = order;

    $scope.$on('update-empList', function(event, data) {
        $scope.employees = data;
    });

    function redirect(id) {
        $state.go('edit', { id: id });
    };

    function selectedEmps(id, flag) {
        if (flag) {
            $scope.selectedEmpsId.push({ _id: id });
        } else {
            $scope.selectedEmpsId.pop({ _id: id });
        }
    };

    function order(predicate) {
        $scope.predicate = predicate;
        $scope.employees = orderBy($scope.employees, predicate, false);
    };

    $scope.order("name")
};
