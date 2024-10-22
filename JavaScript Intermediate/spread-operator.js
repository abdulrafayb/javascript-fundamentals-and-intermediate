"use strict";

/* the big difference between destructuring and spread operator is that it takes out all the elements (individually) from the array and it also doesn't create new variables. and as a consequence, we can only use it in places where we would otherwise write values separated by commas */
const restaurantMenu = {
  name: "Classico Italiano",
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];

// takes all the values out of the arr, writes them as they are written manually
const newArr = [1, 2, ...arr];
console.log(newArr, ...newArr);

const newMenu = [...restaurantMenu.mainMenu, "Gnocci"];
console.log(newMenu);
// case 1: copying array (creating a copy), similar to object.assign()
const mainMenu = [...restaurantMenu.mainMenu];

// case 2: joining two arrays
const wholeMenu = [...restaurantMenu.starterMenu, ...restaurantMenu.mainMenu];
console.log(wholeMenu);

const str = "Abdul";
const letters = [...str, " ", "R"];
console.log(letters);
console.log(...str);
// console.log(`${...str}`);

// real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];

// restaurantMenu.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurantMenu.orderPasta(...ingredients);

// ... also works on objects since 2018 update
const restaurantMenuCopy = {
  foundedIn: 1998,
  ...restaurantMenu,
  founder: "Guiseppe",
};
restaurantMenuCopy.name = "Ristorante Roma";
console.log(restaurantMenu.name, restaurantMenuCopy.name);
