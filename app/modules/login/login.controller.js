'use strict';

angular.module('login')
    .controller('loginCtrl', ['$scope', '$state', '$localStorage', 'loginService', 'employeesService', LoginController])

function LoginController($scope, $state, $localStorage, loginService, employeesService) {

    $scope.validateUser = function() {

        var isValid = loginService.validateUser($scope.user);

        if (isValid) {

            $localStorage.token = { 'authenticated': true };

            employeesService.getEmp().then(function(res) {
                    $localStorage.user = res.filter(function(e) {
                        return e.email == $scope.user.email
                    })[0];
                    $localStorage.empList = _.reject(res, ['_id', $localStorage.user._id.toString()]);
                    $state.go('home');
                })
                .catch(function(msg) {
                    console.log(msg);
                });

        } else {
            alert('Not Registered!');
        }

    }

};
