(function () {

angular.module('DIApp', [])

// .controller('DIController', ['$scope', '$filter', DIController]); //filter and scope are going to be the arguments of the function DIController and tghis cannot be minified, vecause they are literal strings, and js allows us to have different data types in an array

.controller('DIController', DIController);

//When angular looks for this function it's also gonna check whether or not we have a $inject property on the function that is supposed to be the controller and if it finds it it will use that array as guidance to see  which service to inject into the controller funnction itself

DIController.$inject = ['$scope', '$filter'];

//this will also work as well but it's very hard to read 

// .controller('DIController', ['$scope', '$filter', function ($scope, $filter) ($scope, $filter) {
//     $scope.name = "Sofia";

//     $scope.upper = function () {
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//     };

//     console.log($injector.annotate(DIController));
// ]);

//filter lets us create a filter functions that are used for formatting the data that is displatyed to users

function DIController ($scope, $filter, $injector){ 
    $scope.name = "Sofia";

    $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };

 
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


//this will give us an error because the $scope and $filter dissappeared here, and these are the names angular is looking for in order to know what to object into the DIController
//Minified version
// !function(){function n(o,e,t){o.name="Sofia",o.upper=function(){var n=e("uppercase");o.name=n(o.name)},console.log(t.annotate(n))}function o(n,o,e){return"Blah!"}angular.module("DIApp",[]).controller("DIController",n),console.log(o()),console.log(o),console.log(n.toString())}();


//now this will work perfectly
// !function(){function n(o,e,t){o.name="Sofia",o.upper=function(){var n=e("uppercase");o.name=n(o.name)},console.log(t.annotate(n))}function o(n,o,e){return"Blah!"}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",n]),console.log(o()),console.log(o),console.log(n.toString())}();