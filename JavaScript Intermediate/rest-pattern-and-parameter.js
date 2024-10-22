"use strict";

const restaurantMenu = {
  name: "Classico Italiano",
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// spread because on right side of =
const arr = [2, 4, ...[6, 8]];
console.log(arr);

// rest because on left side of =
const [a, b, ...others] = [2, 3, 4, 5, 6];
console.log(a, b, others);

// rest pattern doesn't include any skipped element as pasta here was skipped
// rest element must always be the last element
const [pizza, , risotto, ...otherFoods] = [
  ...restaurantMenu.mainMenu,
  ...restaurantMenu.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// objects
const { sat, ...weekdays } = restaurantMenu.openingHours;
console.log(sat, weekdays);

// functions with rest parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Total Sum: ${sum}`);
};

add(2, 3, 4, 5, 6, 7);

const x = [10, 20, 30];
add(...x);

// ordering pizza
restaurantMenu.orderPizza("mushrooms", "olives", "onion", "spinach");
