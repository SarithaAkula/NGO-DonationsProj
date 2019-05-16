angular.module('test', [])
    .controller('TestController',function($scope){

    $scope.isDisabled = false;

    $scope.disableButton = function() {
        $scope.isDisabled = true;
    }

    });