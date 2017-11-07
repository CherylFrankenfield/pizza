// Business Logic here
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price;
}

var add = function(a,b) {
  return a + b;
}
// Pizza.prototype.yourSizePrice = function() {
//   if (this.size === "Puny small") {
//     this.price = 8.00;
//   } else if (this.size === "Boring medium") {
//     this.price = 12.00;
//   } else if (this.size === "Go-big-or-go-home") {
//     this.price = 14.00;
//   }
//   return this.price;
// }

// Pizza.prototype.yourToppingPrice = function() {
//   for (index = 0; index <= pizzaTopping; index++) {
//     if (this.topping === ".50") {
//       this.topping = .50;
//     } else if (this.topping === ".75") {
//       this.price = .75;
//       yourToppingPrice.push(this.price);
//     } else if (this.topping === "1.25") {
//       this.price = 1.25;
//       yourToppingPrice.push(this.price);
//     } else if (this.topping === "1.00") {
//       this.price = 1.00;
//       yourToppingPrice.push(this.price);
//     }
//     return add(yourToppingPrice);
//   }
// }


var pizzaSize;
var pizzaTopping = [];

Pizza.prototype.yourCost = function() {
  pizzaSize += costOfTopping;
}

// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = parseFloat($("select#select-size").val());
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingSelection = parseFloat($(this).val());
      pizzaTopping.push(toppingSelection);
    });
    var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)
    var costOfTopping = pizzaTopping.reduce(add, 0);
    $(".summary").show();
    $(".total").show();
    $("#your-total").append("<br>" + newPizzaOrder + "</span></br>");
//Shows your order summary.
    $("#your-pizza").append("</br>" + pizzaSize + "</br> with: " , pizzaTopping + "<br>");
  });
});
