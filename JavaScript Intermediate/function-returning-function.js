"use strict";

// this is working because of closures
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// the result of (greet) function is the return function (name) which is stored in (greeterHey) making this variable a function
const greeterHey = greet("Hey!");
greeterHey("Rafay");

// (greet) is a function that returns a function, so then we can call it immediately by passing the (name) argument
greet("Hello")("Rafay");

// functions returning functions becomes extremely useful in a programming paradigm called functional programming

// an example of arrow function returning a function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hello")("Rafay");

// one more example
const tax = (value) => (rate) => value + value * rate;
console.log(tax(100)(0.23));
