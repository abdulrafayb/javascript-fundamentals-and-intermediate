"use strict";

const restaurant = {
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// console.log(restaurant.openingHours.mon.open); (gives an error)
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chaining (?.)
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// practical example of optional chaining
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // to use variable name as property name, we use bracket notation
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// on method
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.orderPizza?.(0, 1) ?? "Method doesn't exist");

// on arrays
const users = [{ firstName: "Abdul", lastName: "Rafay" }];
console.log(users[0]?.firstName ?? "User array empty");

/* without optional chaining, we'll have to write something like this
if (users.length > 0) {
  console.log(users[0].firstName);
} else {
  console.log("User array empty");
}
 */
