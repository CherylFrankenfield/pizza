// Business Logic here
function Pizza(pizzaName, pizzaToppings, pizzaSizeTotal, pizzaToppingTotal) {
  this.name = name;
  this.toppings = toppings;
  this.sizeTotal = sizeTotal;
  this.toppingTotal = toppingTotal;
  this.yourCost();
  this.yourOrder();
}

Pizza.prototype.name = function() {
  if (sizeTotal === "8.00") {
    name = "Puny small";
  } else if (sizeTotal === "12.00") {
    name = "Boring medium";
  } else if (sizeTotal === "14.00") {
    name = "Go-big-or-go-home large";
  }
  return name
}

var add = function(a,b) {
  return a + b;
}

Pizza.prototype.yourCost = function() {
  sizeTotal += toppingTotal;
}

Pizza.prototype.yourOrder = function() {
  name += toppings;
}

// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    var pizzaToppingTotal = [];
    var pizzaSizeTotal = parseFloat($("select#select-size").val());
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingSelection = parseFloat($(this).val());
      pizzaToppingTotal.push(toppingSelection);
      // console.log(pizzaSizeTotal);
      // console.log(pizzaToppingTotal);
    });
    name();
    console.log(name());
    var newPizzaOrder = new Pizza(pizzaName, pizzaToppings, pizzaSizeTotal, pizzaToppingTotal)
    Pizza.topping = pizzaToppingTotal.reduce(add, 0);
    console.log(Pizza.topping);
    Pizza.price = newPizzaOrder.yourCost();
    console.log(Pizza.price);

    //Shows your order summary.
    $(".summary").show();
    $(".total").show();
    $("#your-total").append("<br>" + newPizzaOrder.price + "</span></br>");
    $("#your-pizza").append("</br>" + Pizza.name + "</br> with: " , + Pizza.toppings + "<br>");
  });
});
