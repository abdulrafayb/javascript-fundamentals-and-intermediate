"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const items of menu) {
  console.log(items);
}

for (const items of menu.entries()) {
  console.log(items);
  console.log(`${items[0] + 1}: ${items[1]}`);
}

// destructuring
for (const [i, el] of menu.entries()) {
  console.log("With Destructuring");
  console.log(`${i + 1}: ${el}`);
}
