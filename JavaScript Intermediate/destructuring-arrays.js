"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/* switching variables without destructuring
const temp = main;
main = secondary;
secondary = main; */

// switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [1, 2, 3, [4, 5], 6];
const [, i, , [, j]] = nested;
console.log(i, j);

// when the array has fewer values than variables, the remaining variables take their default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
