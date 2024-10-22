"use strict";

// how can we set the this keyword manually

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Abdul Rafay");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

/* simply copying the book method from lufthansa and pasting it in eurowings is a bad practice so instead we will just take the method in lufthansa and store it in an external function, then we can reuse that function for all the different airlines. but this book becomes a regular function call as its become a separate function and in those functions this keyword returns undefined */
const book = lufthansa.book;
/* it will not work because this keyword here returns undefined so there are three methods to tell JS explicitly what the this keyword should point to, to which airline */
// book(232, "Sarah Williams");

// call method
book.call(eurowings, 232, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 232, "Sarah Williams");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Line",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 232, "Sarah Williams");
console.log(swiss);

/* apply method similar to call method and basically does the same thing, the only difference is that apply doesn't receive a list of arguments after the this keyword but instead it takes an array of the arguments, it then takes the elements from that array and pass it to the function */
const flightData = [293, "George Bush"];
book.apply(swiss, flightData);
console.log(swiss);

// apply method isn't used anymore in modern JS because now we have a better way of doing the exact same thing
book.call(swiss, ...flightData);

/* bind method is similar to call method, the difference is that bind doesn't immediately call the function but instead it returns a new function where this keyword is bound meaning it's set to whatever value we pass into bind */

// with this we can now create one booking function for each airline making it easier to book flights
const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);

bookEW(212, "Martha Cooper");
console.log(eurowings);

// this way the function will always be called with these same arguments
const bookEW272 = book.bind(eurowings, 272);
bookEW272("Steven Williams");
console.log(eurowings);

/* specifying parts of the argument beforehand, is actually a common pattern called partial application, which means that a part of the argumentsof the original functions are already applied which means already set, exactly what we did with (bookEW272) predefining 272 */

// other situations where bind method is useful is when we use objects together with event listeners
lufthansa.planes = 300;

lufthansa.buyPlanes = function () {
  // this keyword points towards the button (buy)
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// here the object calls the function so this keyword returns to the object
lufthansa.buyPlanes();

/* here the handler function is attached to button (buy) element, as the event listener function is calling the other function and so therefore the button itself will then become this keyword, so we use the bind keyword to explicitly make it point towards the object itself */
// document.querySelector("buy").addEventListener("click", lufthansa.buyPlanes.bind(lufthansa));

// one more practical example which adds a tax to some value
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

/* the first argument of the bind method is this keyword but in this case we don't want this keyword to point to something so we set it null as it is a standard, and order of the arguments is important when doing this, if you want to preset the rate then it has to be the first argument in the function otherwise it will not work */
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

/* one can argue what we did up there could easily be done with default parameters but this is actually different because its creating a brand new function here based on a general function */

// recreating the same above scenario with function returning function
const tax = (rate) => (value) => value + value * rate;
const vat = tax(0.23);
console.log(vat(100));
