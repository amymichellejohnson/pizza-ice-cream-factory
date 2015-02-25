restaurantMenu.controller('PizzaCtrl', function PizzaCtrl ($scope, FoodFactory) {

  $scope.pizzaTypes = [
{name: "Cheese", pricePerUnit: 6.0},
{name: "Pepperoni", pricePerUnit: 8.0},
{name: "Combination", pricePerUnit: 10.0},
{name: "Ice-cream Pizza", pricePerUnit: 12.0},
{name: "Veggie", pricePerUnit: 8.0}
];
  $scope.FoodFactory = FoodFactory;

});
