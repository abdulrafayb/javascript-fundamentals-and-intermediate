"use strict";

// third enhancement of object literals that we can compute property names instead of writing them manually
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  // like here, computing instead of manually writing "thursday"
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // we can even compute like this, day-6
  [`day-${2 + 4}`]: {
    open: 0,
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",

  // openingHours: openingHours, older way
  openingHours, // first enhancement of object literal we can call objects like this

  // second enhancement of object literal is about writing methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.openingHours);
