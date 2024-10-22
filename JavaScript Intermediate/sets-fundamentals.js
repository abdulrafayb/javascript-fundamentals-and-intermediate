"use strict";

// arrays
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);

// strings
console.log(new Set("Rafay"));

console.log(ordersSet.size);
// has method is similar to includes method
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
console.log(ordersSet.add("Garlic Bread"));
console.log(ordersSet.add("Garlic Bread"));
console.log(ordersSet.delete("Risotto"));
// console.log(ordersSet.clear()); erases all values

for (const order of ordersSet) {
  console.log(order);
}

// practical example (only wanting to know which differet positions are available)
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// conversion from array to set
const staffUniqueSet = new Set(staff);
console.log(staffUniqueSet);
// conversion from set to array
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);

// to know the size/length
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
console.log(new Set("Abdul Rafay").size);
