(function () {
    'use strict'; 
    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function($scope) {
        $scope.name="";
        $scope.totalValue = 0;

        $scope.displayNumeric = function () {
            // as we update the input 
            var totalNameValue = calculateNumericForString($scope.name); 
            $scope.totalValue = totalNameValue;
        }
    });

    function calculateNumericForString(string){
        var totalValueString = 0;
        for(var i=0; i<string.length; i++){
            totalValueString += string.charCodeAt(i);
        }

        return  totalValueString;
    }

})();
