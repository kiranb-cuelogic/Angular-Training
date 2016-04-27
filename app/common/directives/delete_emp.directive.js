'use strict';

angular.module('directives')
    .directive('delEmp', ['$timeout', 'employeesService', delEmp]);

function delEmp($timeout, employeesService) {
    return {
        restrict: 'E',
        template: '<div><button type="button" class="btn btn-danger" ng-click="delEmp()" ng-disabled="disableBtn">{{delete}}</button></div>',
        link: function(scope, element, attrs) {

            scope.delete = 'Delete';
            scope.disableBtn = false;

            scope.delEmp = function() {
                scope.delete = 'Deleting...';
                scope.disableBtn = true;

                var employees,
                    delete_emp = confirm("Delete Employee?");

                $timeout(function() {
                    if (delete_emp == true) {
                        employees = employeesService.delEmp(attrs.id);
                        scope.$emit('update-empList', employees);
                    }
                    scope.delete = 'Delete';
                    scope.disableBtn = false;
                }, 300);
            };

        }

    }
}
