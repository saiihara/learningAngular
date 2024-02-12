(function (){
    'use strict'; //to make our code more stricter to avoid problems 

    //Name of the application, dependencies in the form of an array
    //As we don't have any, we'll leave it empty
    angular.module('MyFirstApp', []) // corrected module name to 'MyFirstApp'

    //Name of the controller and functions
    .controller('MyFirstController', function ($scope){
        //$scope is an special object that angular owns
        $scope.name = "Sofia";
        $scope.sayHello = function (){
            return "Hello world!";
        }
    });

})();
