Business Logic here
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price;
  this.yourSizePrice();
  this.yourToppingPrice();
  this.yourCost();
}

Pizza.prototype.yourSizePrice = function() {
  if (this.size === "Puny small") {
    this.price = 8.00;
  } else if (this.size === "Boring medium") {
    this.price = 12.00;
  } else if (this.size === "Go-big-or-go-home") {
    this.price = 14.00;
  }
  return this.price;
}

Pizza.prototype.yourToppingPrice = function() {
  for (index = 0; index <= pizzaTopping; index++) {
    if (this.topping === "extra cheese") {
      this.price = .50;
    } else if (this.topping === "mushroom") {
      this.price = .50;
    } else if (this.topping === "pepperoni") {
      this.price = 1.00;
    } else if (this.topping === "pineapple") {
      this.price = 1.00;
    }
    return this.price;
  }
}

Pizza.prototype.yourCost = function() {
  this.yourSizePrice += this.yourToppingPrice;
  return this.yourCost;
}

var pizzaSize = " ";
var pizzaTopping = [];

var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)

// Interface Logic here
$(document).ready(function() {
  $("form#select-order").submit(function(event) {
    event.preventDefault();
    $("select#select-size").each(function(){
      var sizeSelection = $(this).val();
      pizzaSize.push(sizeSelection);
    });
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingSelection = $(this).val();
      pizzaTopping.push(toppingSelection);
    });
    $(".summary").show();
    $(".total").show();
    //Do I need to call the function?
    // newPizzaOrder.yourCost(this.yourSizePrice, this.yourToppingPrice);
    $("#your-total").append("<br>" + newPizzaOrder.yourCost() + "</span></br>");
//Shows your order summary.
    $("#your-pizza").append("</br>" + pizzaSize + "</br> with: " , pizzaTopping + "<br>");
  });
});
