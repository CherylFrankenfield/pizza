// Business Logic here
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price;
  this.yourCost();
}

var add = function(a,b) {
  return a + b;
}

// var pizzaSize;
// var costOfTopping;
// var newPizzaOrder;
// var toppingSummary = [];

Pizza.prototype.yourCost = function() {
  this.size += this.topping;
}

// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    var pizzaTopping = [];
    var pizzaSize = parseFloat($("select#select-size").val());
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingSelection = parseFloat($(this).val());
      pizzaTopping.push(toppingSelection);
      console.log(pizzaTopping);
    });

    var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)
    var x = pizzaTopping.reduce(add, 0);

    var total = newPizzaOrder.yourCost();
    // console.log(this.price);

    //Shows your order summary.
    $(".summary").show();
    $(".total").show();
    $("#your-total").append("<br>" + newPizzaOrder.price + "</span></br>");
    $("#your-pizza").append("</br>" + newPizzaOrder.size + "</br> with: " , + newPizzaOrder.topping + "<br>");

  });
});
