(function () {
    'use strict';

    var shoppingList1 = ["Milk", "Donuts", "Chocolate", "Pepsi", "Apple", "Pasta", "Pepsi chocolate", "Pepsi cookie"];

    //4 objects
    var shoppingList2 = [
        {
            name: "Milk",
            quantity:"2",
        },

        {
            name: "Donuts",
            quantity:"200",
        },

        {
            name: "Chocolate",
            quantity:"5",
        },
    ];

    angular.module('ShoppingListApp',  [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope){
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;


        $scope.addToList = function (){
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity,
            };

            $scope.shoppingList2.push(newItem);
        };
    }

})();
