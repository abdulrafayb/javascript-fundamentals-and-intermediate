"use strict";

const bookings = [];

// newer way of setting default values (ES6)
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  /* how we sert default values in the older versions of JS (ES5)
  numPassenger = numPassenger || 1;
  price = price || 199; */

  const booking = {
    // object literal syntax
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 5);
createBooking("LH123", 2, 800);
/* we can't skip arguments here when we call the function, lets say we wanted to leave number of passengers as default value but then specify the price, because the second argument will always be mapped to second parameter
createBooking("LH123", 1000); number of passenger will be set to 1000 */
createBooking("LH123", undefined, 1000); // this is how we skip the default parameter that we want to leave at its default value

console.log(bookings);
