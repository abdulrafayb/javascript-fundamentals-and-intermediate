"use strict";

// nullish operatoe doesn't consider 0 Or "" a falsey value
const restaurant = {
  name: "Classico Italiano",
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// works with nullish or undefined values
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
