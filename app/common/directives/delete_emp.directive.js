'use strict';

angular.module('directives')
    .directive('delEmp', ['employeesService', delEmp]);

function delEmp(employeesService) {
    return {
        restrict: 'E',
        template: '<div><button type="button" class="btn btn-danger" ng-click="delEmp()">Delete</button></div>',
        scope: {
            id: "@id"
        },
        link: function(scope, element, attrs) {

            scope.delEmp = function() {
                var employees,
                    delete_emp = confirm("Delete Employee?");

                if (delete_emp == true) {
                    employees = employeesService.delEmp(attrs.id);
                    scope.$emit('update-empList', employees);
                }
            }
            
        }

    }
}
