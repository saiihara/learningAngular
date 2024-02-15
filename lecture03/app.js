(function () {

angular.module('DIApp', [])

.controller('DIController', DIController); //value of the function

//filter lets us create a filter functions that are used for formatting the data that is displatyed to users

function DIController ($scope, $filter, $injector){ //function 
    $scope.name = "Sofia";

    $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
}

function AnnotateMe(name, job, blah){
    return "Blah!";
}

//console.logs the return
console.log(AnnotateMe());

//returns the entire function
console.log(AnnotateMe);


//Angular can actually go ahead and parse out the names and find out the macthing service and then instance these services and call DIController with those instantations
//to use it, it uses $injector
console.log(DIController.toString());
})();