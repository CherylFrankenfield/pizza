// Business Logic here
// function Pizza(size, topping) {
//   this.size = size;
//   this.topping = topping;
// }
//
// Pizza.prototype.yourPizza = function() {
//   return this.size + ", " + this.topping;
// }



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
    $("#your-pizza").append(pizzaSize + "<br>", pizzaTopping + "<br>");
    // $("ul#your-pizza").append("<li>" + pizzaSize + pizzaTopping + "</span></li>");

    // var pizzaSize = $("input#size").val();
    // var pizzaTopping = $("input#topping").val();



    // var newPizzaOrder = new Pizza(pizzaSize, pizzaTopping)
    //
    // $("ul#your-pizza").append("<li>" + pizza.yourPizza() + "</span></li>");

  });
});
