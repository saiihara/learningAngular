(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    // 2 - we register the factory filter in the angular app
    .filter('loves', LovesFilter)

      // 2.2 we register the factory filter with multiple args
    // since we are going to use it directly in the HTML we don't need to register it in the controller
    .filter('truth', TruthFilter);


    // in order to protect us from the minification of the code, we use $inject

    // 3 - add it to the array. "Loves" is the filter name and Angular expects to attack a Filter

    MsgController.$inject = ['$scope', 'lovesFilter', 'truthFilter'];

    // 4 - we have to register it as a second argument here too, now we can use it
    function MsgController($scope, lovesFilter, truthFilter){
        $scope.name = "Sofia";
        $scope.stateOfBeing = "happy";
        $scope.icecreamcost = 0.54;

        $scope.sayMessage = function (){
            var msg = "Sofia loves lemon ice cream";
            return msg;
        };

        $scope.sayLovesMessage = function (){
            var msg = "Sofia loves lemon ice cream";
            msg = lovesFilter(msg);
            return msg;
        };

        $scope.sadCat = function (){
            $scope.stateOfBeing = "sad";
        };
    }

   // 1 - we create our custom filter (filter factory)
    function LovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

     // 1.2 - we create another filter factory with more arguments
    function TruthFilter(){

        // the user of the filter specify what the target string what we should replace that with
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
    }
})();
