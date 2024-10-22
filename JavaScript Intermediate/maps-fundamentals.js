"use strict";

const restaurant = new Map();
restaurant.set("name", "Classico Italiano");
restaurant.set(1, "Firenze, Italy");
restaurant.set(2, "Lisbon, Portugal");
console.log(restaurant);

restaurant
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(restaurant.get("name"));
console.log(restaurant.get(true));
console.log(restaurant.get(1));
console.log(restaurant.get("1"));

const time = 21;
console.log(
  restaurant.get(
    time > restaurant.get("open") && time < restaurant.get("close")
  )
);

// to check whether a map contains a certain key
console.log(restaurant.has("categories"));

restaurant.delete(2);
// restaurant.clear() erases everything
console.log(restaurant);
console.log(restaurant.size);

/* this would not work because doesn't refer to the same place in memory, primitives vs objects
restaurant.set([1, 2], "Test");
restaurant.get([1, 2]); */
const arr = [1, 2];
restaurant.set(arr, "Test");
console.log(restaurant.get(arr));

// it refers to the actual h1 heading on the page
// restaurant.set(document.querySelector("h1"), "Heading");
