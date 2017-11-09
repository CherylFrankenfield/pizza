// Business Logic here
function Pizza(toppings, sizeTotal, toppingTotal) {
  this.toppings = toppings;
  this.sizeTotal = sizeTotal;
  this.toppingTotal = toppingTotal;
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

Pizza.prototype = function() {
    if ("topping" === ".50") {
      yourOrderToppingSummary = "Extra cheese";
      toppingSummary.push("Extra cheese");
    } else if ("topping" === ".75") {
      yourOrderToppingSummary = "Mushroom";
      toppingSummary.push("Mushroom");
    } else if ("topping" === "1.25") {
      yourOrderToppingSummary = "Pepperoni";
      toppingSummary.push("Pepperoni");
    } else if ("topping" === "1.00") {
      yourOrderToppingSummary = "pineapple";
      toppingSummary.push("pineapple");
    }
}

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

    toppings = " ";
    var newPizzaOrder = new Pizza(pizzaToppings, pizzaSizeTotal, pizzaToppingTotal)
    newPizzaOrder.theName();

    //Shows your order summary.
    $(".summary").show();
    $(".total").show();
    $("#your-total").append("<br>" + newPizzaOrder.yourCost(pizzaSizeTotal, pizzaToppingTotal) + "</span></br>");
    $("#your-pizza").append("</br>" + newPizzaOrder.theName(pizzaSizeTotal) + "</br> with: " , + newPizzaOrder.toppingTotal + "<br>");
  });
});
