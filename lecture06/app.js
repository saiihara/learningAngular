(function () {
'ise strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

//in order to protect us from the minification of the code, we use $inject

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter){
    $scope.name = "Sofia";
    $scope.stateOfBeing = "happy";
    $scope.icecreamcost = 0.54;

    $scope.sayMessage = function (){
        var msg = "Sofia loves lemon ice cream";
        //filtering function
        //you call the filter and then pass what you want to filter 
        //to see more filters check documentation
        var output = $filter('uppercase')(msg);
        return output;
    };

    $scope.sadCat = function (){
        $scope.stateOfBeing = "sad";
    };

    $scope.sound = "/sonido https://www.youtube.com/shorts/OIaPnw438GA";
}


})();