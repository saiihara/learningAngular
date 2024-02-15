(function () {
'ise strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

//in order to protect us from the minification of the code, we use $inject

MsgController.$inject = ['$scope'];
function MsgController($scope){
    $scope.name = "Sofia";
    $scope.stateOfBeing = "happy";

    $scope.sayMessage = function (){
        return "Sofia loves lemon ice cream!";
    };

    $scope.sadCat = function (){
        $scope.stateOfBeing = "sad";
    };

    $scope.sound = "/sonido https://www.youtube.com/shorts/OIaPnw438GA";
}


})();