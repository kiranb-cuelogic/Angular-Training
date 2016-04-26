'use-strict';

angular.module('directives')
    .directive('availemail', function($q, $timeout, $localStorage) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {

                alreadyTaken = _.map($localStorage.empList, 'email')

                if (scope.state == 'add') {
                    ctrl.$asyncValidators.avail = function(modelValue, viewValue) {

                        if (ctrl.$isEmpty(modelValue)) {
                            // consider empty model valid
                            return $q.when();
                        }

                        var def = $q.defer();

                        $timeout(function() {
                            // Mock a delayed response
                            if (alreadyTaken.indexOf(modelValue) === -1) {
                                // The email is available
                                def.resolve();
                            } else {
                                def.reject();
                            }

                        }, 2000);

                        return def.promise;
                    };
                }


            }
        };
    });
