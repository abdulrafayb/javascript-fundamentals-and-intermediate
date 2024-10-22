"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // instead of passing in so many parameter we pass objects using destructuring
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time = "22:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName);

// default values (same as arrays)
const { restaurantMenu: menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// the reason the property names need to match is that the destructuring assignment is looking for specific properties in the passed object
restaurant.orderDelivery({
  time: "22:00",
  address: "Via del Sole, 21",
  starterIndex: 2,
  mainIndex: 0,
});

// we can also set default values up there
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 0,
});

// mutating variables
let a = 233;
let b = 311;
const obj = { a: 23, b: 32, c: 13 };
// let { a, b } = obj;
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close: c },
} = openingHours;
console.log(open, c);
