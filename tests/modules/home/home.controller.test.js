// describe('home ctrl', function() {


//     var controller, scope;

//     beforeEach(module('home'));

//     beforeEach(inject(function($controller, $rootScope) {
//         scope = $rootScope.$new();
//         controller = $controller('homeCtrl', {
//             $scope: scope
//         });
//     }));

//     // describe('homeCtrl should exist', function() {

//     // it('should exist', function() {
//     //     var $scope = {};
//     //     homeCtrl = $controller('homeCtrl', {
//     //         $scope: $scope
//     //     });
//     //     expect(homeCtrl).toBeDefined();
//     // });
//     it('should have scope to be defined', function() {
//         expect(scope).toBeDefined();
//     });

//     // });
// });


// describe('home ctrl', function() {
//     var controller, scope;

//     beforeEach(module('home'));

//     beforeEach(inject(function($controller, $rootScope) {
//         scope = $rootScope.$new();
//         controller = $controller('homeCtrl', {
//             $scope: scope
//         });
//     }));
    
//     it('should have scope to be defined', function(scope) {
//         expect(scope).toBeDefined();
//     });

// });


describe('homeCtrl', function() {

    var controller, scope;

    beforeEach(module('home'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('homeCtrl', {
            $scope: scope
        });
    }));

    it('should have scope to be defined', function(scope) {
        expect(scope).toBeDefined();
    });

});
