'use strict';

angular.module('directives')
    .directive('header', ['$localStorage', '$state', header]);

function header($localStorage, $state) {
    return {
        restrict: 'E',
        templateUrl: 'app/common/directives/templates/header.view.html',
        link: function(scope) {

            scope.username = $localStorage.user.name;
            scope.logout = logout;

            function logout() {
                delete $localStorage.token;
                delete $localStorage.user;
                delete $localStorage.empList;
                $state.go('login');
            }
        }
    }
};
