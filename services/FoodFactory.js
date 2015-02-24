restaurantMenu.factory('FoodFactory', function FoodFactory() {
  var factory = {};
  factory.purchases = [];

  factory.priceTotal = function() {
    var totat = 0;
    factory.purchases.forEach(function(purchase) {
      total = total + purchase.price;
    });
    return total;
  };

  factory.addPurchase = function() {
    var purchase = { name: factory.purchaseName, quantity: factory.purchaseQuantity, pricePerUnit: factory.pricePerUnit};
    purchase.price = purchase.quantity * purchase.pricePerUnit;
    factory.purchases.push(purchase);

    purchaseName = null;
    purchaseQuantity = null;
    pricePerUnit = null;
  };

  factory.deletePurchase = function(purchase) {
    var index = factory.purchases.indexOf(purchase);
    factory.purchases.splice(index, 1);
  };
  return factory;
});
