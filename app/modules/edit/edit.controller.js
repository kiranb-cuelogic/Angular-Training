'use strict';

angular.module('edit')
    .controller('editCtrl', ['$scope', '$state', '$localStorage', 'employeesService', EditController])

function EditController($scope, $state, $localStorage, employeesService) {

    $scope.editEmp = {};
    $scope.updateEmp = updateEmp;
    $scope.state = $state.current.name;

    $scope.editEmp = $localStorage.empList.find(function(e) {
        return e._id == $state.params.id });

    function updateEmp(obj) {
        employeesService.setEmp(obj);
        $state.go('home');
    };
};
