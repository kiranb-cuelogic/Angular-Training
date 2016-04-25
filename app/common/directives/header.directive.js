'use strict';

angular.module('directives')
    .directive('header', [header]);

function header() {
    return {
        restrict: 'E',
        templateUrl: 'app/common/directives/templates/header.view.html',
        link: function(scope) {

        }
    }
};
