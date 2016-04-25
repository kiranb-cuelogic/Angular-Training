'use strict';

angular.module('edit')
    .controller('editCtrl', ['$scope', '$state', 'employeesService', EditController])

function EditController($scope, $state, employeesService) {

    $scope.editEmp = {};
    $scope.updateEmp = updateEmp;
    $scope.state = 'edit';
    var employees = [];

    employeesService.getEmp().then(function(res) {
            $scope.editEmp = res.find(function(e) {
                return e._id == $state.params.id
            });
            employees = res;
        })
        .catch(function(msg) {
            console.log(msg);
        });

    function updateEmp(obj) {
        employeesService.setEmp(obj);
        $state.go('home');
    };
};
