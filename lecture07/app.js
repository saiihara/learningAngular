(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', lovesFilter);

    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter){
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

    function lovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }
})();
