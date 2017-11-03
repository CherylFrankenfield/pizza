// Business Logic here
function Pizza(size, topping, price, yourSizePrice, yourToppingPrice) {
  this.size = size;
  this.topping = topping;
  this.price;
  this.yourSizePrice();
  this.yourToppingPrice();
}

Pizza.prototype.yourSizePrice = function() {
  if (this.size === "Puny small") {
    this.price = 8.00;
  } else if (this.size === "Boring medium") {
    this.price = 12.00;
  } else if (this.size === "Go-big-or-go-home") {
    this.price = 14.00;
  }
}

Pizza.prototype.yourToppingPrice = function() {
  if (this.topping === "extra cheese" || "mushroom") {
    this.price = .50;
  } else if (this.topping === "pepperoni" || "pineapple") {
    this.price = 1.00;
  }
}

Pizza.prototype.yourCost = function() {
  return this.yourSizePrice() += this.yourToppingPrice();
}

var pizzaSize = [];
var pizzaTopping = [];

var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)

// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
      var sizeSelection = $(this).val();
      pizzaSize.push(sizeSelection);
    });
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingSelection = $(this).val();
      pizzaTopping.push(toppingSelection);
    });

    $(".summary").show();
// Below, this is the price of what your total pizza cost will display eventually.
    $(".total").show();
    $("#your-total").append("<li>" + newPizzaOrder.yourCost() + "</span></li>");

//Shows your order summary.
    $("#your-pizza").append(pizzaSize + "</br> with: ", pizzaTopping + "<br>");
    // refactor code
    // $("ul#your-pizza").append("<li>" + pizzaSize + pizzaTopping + "</span></li>");
    // var pizzaSize = $("input#size").val();
    // var pizzaTopping = $("input#topping").val();


  });
});
