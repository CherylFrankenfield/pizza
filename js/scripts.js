// Business Logic here
function Pizza(sizeTotal, toppingTotal, toppings) {
  this.sizeTotal = sizeTotal;
  this.toppingTotal = toppingTotal;
  this.toppings = toppings;
  this.yourCost();
  this.theName();
}

Pizza.prototype.theName = function(sizeTotal) {
  if (sizeTotal === 8) {
    return "Puny small";
  } else if (sizeTotal === 12) {
    return "Boring medium";
  } else if (sizeTotal === 14) {
    return "Go-big-or-go-home large";
  }
}

// Pizza.prototype.toppingsList = function(toppingsList) {
//   for (index = 0; index < toppingSelection; index++) {
//     if (this.toppingsList === .50) {
//       return "Extra cheese";
//     } else if (this.toppingsList === .75) {
//       return "Mushroom";
//     } else if (this.toppingsList === 1.25) {
//       return "Pepperoni";
//     } else if (this.toppings.List === 1.00) {
//       return "pineapple";
//     }
//   }
// }

Pizza.prototype.yourCost = function(sizeTotal, toppingTotal) {
  return sizeTotal + toppingTotal
}

// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    //function w/ each loop to grab all toppings selected and add them.
    var pizzaToppingTotal = 0;
    var pizzaSizeTotal = parseFloat($("select#select-size").val());
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingSelection = parseFloat($(this).val());
      pizzaToppingTotal = pizzaToppingTotal + toppingSelection;
    });
    var pizzaToppings = 0;
    var newPizzaOrder = new Pizza(pizzaSizeTotal, pizzaToppingTotal, pizzaToppings)
    newPizzaOrder.theName();
    //Shows your order summary.
    $(".summary").show();
    $(".total").show();
    $("#your-total").append("<br>" + newPizzaOrder.yourCost(pizzaSizeTotal, pizzaToppingTotal) + "</span></br>");
    $("#your-pizza").append("</br>" + newPizzaOrder.theName(pizzaSizeTotal) + "</br> with: " , + newPizzaOrder.toppings + "<br>");
  });
});
