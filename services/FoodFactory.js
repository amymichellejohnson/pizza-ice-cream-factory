restaurantMenu.factory('FoodFactory', function FoodFactory() {
  var factory = {};
  factory.purchases = [];

  factory.priceTotal = function() {
    var total = 0;
    factory.purchases.forEach(function(purchase) {
      total = total + purchase.price;
    });
    return total;
  };

  factory.addPurchase = function() {
    var purchase = { name: JSON.parse(factory.product).name,
                 quantity: parseInt(factory.purchaseQuantity),
             pricePerUnit: JSON.parse(factory.product).pricePerUnit
    };
    purchase.price = purchase.quantity * purchase.pricePerUnit;
    factory.purchases.push(purchase);
    console.log(factory.purchases);
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
