restaurantMenu.controller('IceCreamCtrl', function IceCreamCtrl ($scope, FoodFactory) {

  $scope.iceCreamTypes = [
  {name: "Sundae", pricePerUnit: 4.5},
  {name: "Scoop", pricePerUnit: 1.0},
  {name: "Milkshake", pricePerUnit: 3.0},
  {name: "Frozen Yogurt", pricePerUnit: 2.0},
  {name: "Pint", pricePerUnit: 8.0}
  ];

  $scope.FoodFactory = FoodFactory;
});
