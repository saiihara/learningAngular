(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterAppController', counterController);

    counterController.$inject = ['$scope'];

    function counterController($scope) {
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Sof";

        console.log("Number of watchers ", $scope.$$watchersCount);

        $scope.countOnce = function () {
            $scope.onceCounter = 1;
        };

        $scope.upCounter = function () {
            $scope.counter++;
        };

        $scope.$watch(function (){

            console.log("Digest loop fired");
        });

        // $scope.$watch('onceCounter', function (newValue, oldValue) {
        //     console.log("once Old value ", oldValue)
        //     console.log("once New value ", newValue);
        // });

        // $scope.$watch('counter', function (newValue, oldValue) {
        //     console.log("counter Old value ", oldValue)
        //     console.log("counter New value ", newValue);
        // });
    }
})();
