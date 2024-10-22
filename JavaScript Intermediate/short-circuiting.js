"use strict";

const restaurantMenu = {
  name: "Classico Italiano",
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// OR short-circuiting evaluate truthy values (returns them first before the falsey values)
console.log(3 || "Rafay");
console.log("" || "Rafay");
console.log(0 || true);
// there is no truthy value so it will check till end printing the last value
console.log(undefined || null);
// it will print the first truthy value it gets which is hello
console.log(undefined || 0 || "" || "hello" || 23 || null);

// practical approach for OR short circuiting (better than if-else and ternary)
restaurantMenu.numGuests = 0;
// why when set to 0 causes problem? because then it becomes a falsey value
const guests1 = restaurantMenu.numGuests ? restaurantMenu.numGuests : 10;
const guests2 = restaurantMenu.numGuests || 10;
console.log(guests1);
console.log(guests2);

// for AND operator all need to be true (basic fundamental)
// AND (&&) short-circuiting evaluate falsey values (returns them first before the truthy values)
console.log(0 && "Rafay");
console.log(7 && "Rafay");
console.log("Hello" && 23 && null && "Rafay");

// practical approach for AND short circuiting (better than if-else and ternary)
if (restaurantMenu.orderPizza) {
  restaurantMenu.orderPizza("Pepperoni", "Veggies", "Olives");
}
// as restaurantMenu.orderPizza exists (making it true) then it sexecute the second statement
restaurantMenu.orderPizza &&
  restaurantMenu.orderPizza("Pepperoni", "Sausage", "Corn");

// for practical applications, we use OR operator to set default values, and AND operator to execute code in second operand if the first one is true
