"use strict";

const flight = "LH234";
const details = {
  name: "Abdul Rafay",
  passport: 9979,
};

const checkIn = function (flightNum, passenger) {
  /* flightNum simply contains a copy of the original value (flight) so the flightNum down here is a completely different variable therefore it didn't get reflected in the outside flight variable */
  flightNum = "LH765";
  /* when we pass a reference type to function what is copied is just a reference to the object in memory heap, so when we manipulate passenger object it is the same as manipulating details object because they both are the same object in memory heap */
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === "9979") {
    // alert("Checked in");
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, details);
console.log(flight, details);

// example of how the interaction of different functions with the same object can create issues
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 9999);
};

newPassport(details);
checkIn(flight, details);
