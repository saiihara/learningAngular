(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];

    function CounterController($scope, $timeout) {
        $scope.counter = 0;

        // Using AngularJS $timeout
        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("Counter incremented with native function");
            }, 2000);

            //USING APPLY

            // setTimeout(function() {
            //     $scope.counter++;
            //     $scope.$apply(function (){

            //         //this is the better way of doing it 
            //         //this will call apply and excecute it and will catch exceptions and digest will GET CALLED AUTOMACTIALLY 
            //         //we should check if there is the same function in AngularJS first
            //         console.log("Counter incremented with apply");
            //     })
            // }, 2000)
        

            //this set time out function is not being called inside the angular context
            // setTimeout(function () {
            //     $scope.counter++;
            //     console.log("Counter incremented with digest");

            //     //we kick it off manually and the digest cycle is going to get kicked off and the watcher
            //     // for this counter will therefore be checked 
            //     // the problem of calling it directly is that if there's any kind of error the exception thrown will 
            //     // not be visible to angularJS
            //     // $scope.$digest();
            // }, 2000)
        }
    }
})();
