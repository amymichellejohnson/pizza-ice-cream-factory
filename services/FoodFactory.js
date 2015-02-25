restaurantMenu.factory('FoodFactory', function FoodFactory() {
  var factory = {};
  factory.iceCreamPurchases = [];
  factory.pizzaPurchases = [];

  factory.priceTotal = function() {
    var total = 0;
    factory.iceCreamPurchases.forEach(function(purchase) {
      total = total + purchase.price;
    });
    factory.pizzaPurchases.forEach(function(purchase){
      total = total + purchase.price;
    });
    return total;
  };

  factory.iceCreamPrice = function() {
    var total = 0;
    factory.iceCreamPurchases.forEach(function(purchase){
      total = total + purchase.price;
    });
    return total;
  };

  factory.pizzaPrice = function() {
    var total = 0;
    factory.pizzaPurchases.forEach(function(purchase){
      total = total + purchase.price;
    });
    return total;
  };


  factory.addIceCream = function() {
    var purchase = { name: JSON.parse(factory.product).name,
                 quantity: parseInt(factory.purchaseQuantity),
             pricePerUnit: JSON.parse(factory.product).pricePerUnit
    };
    purchase.price = purchase.quantity * purchase.pricePerUnit;
    factory.iceCreamPurchases.push(purchase);
    console.log(factory.purchases);
    purchaseName = null;
    purchaseQuantity = null;
    pricePerUnit = null;
  };

  factory.addPizza = function() {
    var purchase = { name: JSON.parse(factory.product).name,
      quantity: parseInt(factory.purchaseQuantity),
      pricePerUnit: JSON.parse(factory.product).pricePerUnit
    };
    purchase.price = purchase.quantity * purchase.pricePerUnit;
    factory.pizzaPurchases.push(purchase);
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
