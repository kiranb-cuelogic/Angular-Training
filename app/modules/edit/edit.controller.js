'use strict';

angular.module('edit')
    .controller('editCtrl', ['$scope', '$route', '$location', 'employeesService', EditController])

function EditController($scope, $route, $location, employeesService) {

    $scope.editEmp = {};
    //$scope.editForm = {};
    $scope.updateEmp = updateEmp;
    $scope.state = 'edit';
    var employees = [];

    // if ($route.current.params._id == ':add') {
    //     $scope.editEmp = {};
    //     $scope.editForm.$setPristine = true;
    // } else {
    employeesService.getEmp().then(function(res) {
            $scope.editEmp = res.find(function(e) {
                return e._id == $route.current.params._id
            });
            employees = res;
        })
        .catch(function(msg) {
            console.log(msg);
        });
    // }

    function updateEmp(obj) {
        employeesService.setEmp(obj);
        $location.path('/home');
    };
};
