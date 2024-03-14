(function () {
    'use strict';

    angular.module('BindingApp', [])
    .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];
    function BindingController($scope) {
        $scope.firstName = "Sofia";

        // the second the property that is one time bound gets initalized thats where the angular digest cicle loops over all the watchers
        // and outputs it in the browser but removes the watcher for it, it will never get updated again
        //the very first time it gets initialized it will be inside the function set full name
        // $scope.fullName = "";


        $scope.showNumberOfWatchers = function (){
            console.log("Number of watchers", $scope.$$watchersCount);
        };

        //if we click it the first time it will say undefined (show full name)
        //but if we click here, the name will show in the html and console log
        //but instead of two watchers, only one will remain, we dont need it anymore
        //the two name binding will still work
        //if i change the name it wont update the html since we only have 1 time binding, but we'll see it in console log

        $scope.setFullName = function (){
            $scope.fullName = $scope.firstName + " " + "Khud";
        }

        $scope.logFirstName = function (){
            console.log("First name is: ", $scope.firstName);
        }

        $scope.logFullName = function (){
            console.log("Full name is: ", $scope.fullName);
        };
    }
})();
