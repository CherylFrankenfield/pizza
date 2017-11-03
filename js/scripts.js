// Business Logic here
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.yourPizza = function() {
  return this.size + ", " + this.topping;
}



// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input#size").val();
    var pizzaTopping = $("input#topping").val();
    $("ul#your-pizza").append("<li>" + pizzaSize + "</span></li>");

    // var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)
    //
    // $("ul#your-pizza").append("<li>" + pizza.yourPizza() + "</span></li>");

  });
});
