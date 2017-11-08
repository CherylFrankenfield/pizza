// Business Logic here
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price;
  // this.yourOrderSizeSummary;
  // this.yourOrderToppingSummary;
  this.yourCost();
}

var add = function(a,b) {
  return a + b;
}

var yourOrderSizeSummary = function() {
  if (pizzaSize === 8.00) {
    yourOrderSizeSummary = "Puny small";
    toppingSummary.push("Puny small");
  } else if (pizzaSize === 12.00) {
    yourOrderSizeSummary = "Boring medium";
    toppingSummary.push("Boring medium");
  } else if (pizzaSize === 14.00) {
    yourOrderSizeSummary = "Go-big-or-go-home";
    toppingSummary.push("Go-big-or-go-home");
  }
}

var yourOrderToppingSummary = function() {
    if ("topping" === ".50") {
      yourOrderToppingSummary = "Extra cheese";
      sizeSummary.push("Extra cheese");
    } else if ("topping" === ".75") {
      yourOrderToppingSummary = "Mushroom";
      sizeSummary.push("Mushroom");
    } else if ("topping" === "1.25") {
      yourOrderToppingSummary = "Pepperoni";
      sizeSummary.push("Pepperoni");
    } else if ("topping" === "1.00") {
      yourOrderToppingSummary = "pineapple";
      sizeSummary.push("pineapple");
    }
}

var pizzaSize;
var costOfTopping;
var pizzaTopping = [];
var newPizzaOrder;
var sizeSummary = [];
var toppingSummary = [];

Pizza.prototype.yourCost = function(newPizzaOrder) {
  this.size += this.price;
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
    this.price = pizzaTopping.reduce(add, 0);
    // console.log(this.price);
    //Shows your order summary.
    var sizeSummary1 = yourOrderSizeSummary();
    var toppingSummary1 = yourOrderToppingSummary();
    $(".summary").show();
    $(".total").show();
    $("#your-total").append("<br>" + newPizzaOrder.yourCost() + "</span></br>");
    $("#your-pizza").append("</br>" + sizeSummary1 + "</br> with: " , toppingSummary1 + "<br>");
    console.log(sizeSummary1);
  });
});
