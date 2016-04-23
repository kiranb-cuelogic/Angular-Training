'use strict';

angular.module('login')
    .controller('loginCtrl', ['$scope', '$location', 'loginService', LoginController])

function LoginController($scope, $location, loginService) {

    $scope.validateUser = function() {

        var isValid = loginService.validateUser($scope.user);

        if (isValid) {
            $location.path('/home');
        } else {
            alert('Not Registered!');
        }

    }

};
