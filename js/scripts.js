// Business Logic here
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price;
  this.yourSizePrice();
  this.yourToppingPrice();
}

Pizza.prototype.yourCost = function() {
  return this.yourSizePrice() += this.yourToppingPrice();
}

Pizza.prototype.yourSizePrice = function() {
  if (this.size === "Puny small") {
    this.price = "8.00";
  } else if (this.size === "Boring medium") {
    this.price = "12.00";
  } else if (this.size === "Go big or go home large") {
    this.price = "14.00";
  }
}

Pizza.prototype.yourToppingPrice = function() {
  if (this.topping === "extra cheese" || "mushroom") {
    this.price = ".50";
  } else if (this.topping === "pepperoni" || "pineapple") {
    this.price = "1.00";
  }
}


// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    var pizzaSize = [];
    var pizzaTopping = [];
    $("input:checkbox[name=size]:checked").each(function(){
      var sizeSelection = $(this).val();
      pizzaSize.push(sizeSelection);
    });
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingSelection = $(this).val();
      pizzaTopping.push(toppingSelection);
    });

    $("p#pizza-ordered").show();
    // Below, this is the price of what your total pizza cost will display eventually.
    $("ul#your-pizza").append("<li>" + pizza.yourCost() + "</span></li>");

    // refactor code
    // $("#your-pizza").append(pizzaSize + "<br>", pizzaTopping + "<br>");
    // $("ul#your-pizza").append("<li>" + pizzaSize + pizzaTopping + "</span></li>");
    // var pizzaSize = $("input#size").val();
    // var pizzaTopping = $("input#topping").val();

    var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)

  });
});
