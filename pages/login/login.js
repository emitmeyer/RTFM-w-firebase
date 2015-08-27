angular.module('rtfmApp')
.controller('loginPageController', function($scope, $location, fb, $firebaseAuth, userService){

    $scope.loginWithGoogle = function(){
    	userService.loginWithGoogle();
    }

});