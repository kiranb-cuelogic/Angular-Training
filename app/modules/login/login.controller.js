'use strict';

angular.module('login')
    .controller('loginCtrl', ['$scope', LoginController])

function LoginController($scope) {
    $scope.validateUser = function() {
        alert('fjgd');
    }
};
