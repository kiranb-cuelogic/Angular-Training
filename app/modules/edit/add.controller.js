'use strict';

angular.module('edit')
    .controller('addCtrl', ['$scope', AddController]);

function AddController($scope) {
    $scope.state = 'add';

console.log($scope.editEmp);
    // $scope.editEmp.name.$dirty = false;
    // $scope.editEmp = {};

    // $scope.editForm = {};

    //$scope.editForm.$setPristine();
    //$scope.editForm.$setDirty();


};
