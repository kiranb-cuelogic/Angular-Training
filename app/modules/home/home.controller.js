'use strict';

angular.module('home')
    .controller('homeCtrl', ['$scope', '$localStorage', '$state', '$filter', HomeController])

function HomeController($scope, $localStorage, $state, $filter) {

    var orderBy = $filter('orderBy');

    $scope.employees = $localStorage.empList;
    $scope.sortOpts = ['name', 'email', 'age', 'gender'];

    $scope.redirect = redirect;
    $scope.order = order;

    $scope.$on('update-empList', function(event, data) {
        $scope.employees = data;
    });

    ui - sref = "edit({id: '{{data._id}}'})"

    function redirect(id) {
        $state.go('edit')
    };

    function order(predicate) {
        $scope.predicate = predicate;
        $scope.employees = orderBy($scope.employees, predicate, false);
    };

    $scope.order("name")
};
