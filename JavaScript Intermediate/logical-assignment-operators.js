"use strict";

const restaurantOne = {
  name: "Capri",
  numGuests: 20,
};

const restaurantTwo = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

const restaurantThree = {
  numGuests: 0,
};

// OR assignment operator
// restaurantOne.numGuests = restaurantOne.numGuests || 10;
restaurantOne.numGuests ||= 10;
console.log(restaurantOne);

// restaurantTwo.numGuests = restaurantTwo.numGuests || 20;
restaurantTwo.numGuests ||= 20;
console.log(restaurantTwo);

// nullish assignment operator
restaurantThree.numGuests ??= 20;
console.log(restaurantThree);

// AND short-circuiting
restaurantOne.owner = restaurantOne.owner && "Owner";
console.log(restaurantOne);
// AND assignment operator
restaurantOne.owner &&= "Owner"; // assigns value only if it is truthy (difference)
console.log(restaurantOne);

restaurantTwo.owner &&= "Owner";
console.log(restaurantTwo);
