'use strict';

angular.module('login')
    .controller('loginCtrl', ['$scope', '$state', 'loginService', LoginController])

function LoginController($scope, $state, loginService) {

    $scope.validateUser = function() {

        var isValid = loginService.validateUser($scope.user);

        if (isValid) {
            $state.go('home');
        } else {
            alert('Not Registered!');
        }

    }

};
