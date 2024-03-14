var numberArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array: ", numberArray);

var filteredNumbeArray = numberArray.filter(function(value){
    //we need to return if the value is true or false
    return value > 5;
});

console.log("Filtered array: ", filteredNumbeArray);