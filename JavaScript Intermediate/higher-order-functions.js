"use strict";

// two simple functions that do string transformations (lower-level function)
const oneWord = function (str) {
  // removes all the spaces in the string
  return str.replace(/ /g, " ").toLowerCase();
};

const upperFirstWord = function (str) {
  // converts only first word to uppercase
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher-order function because it takes in a function as parameter (higher-level of abstraction)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  // functions not only have methods but also properties
  console.log(`Transformed by: ${fn.name}`);
};

// we are only passing in the function value and this function will be called by transformer function
transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callback functions all the time because they allow us to create abstractions
const highFive = function () {
  console.log(`👋`);
};
// document.body.addEventListener("click", highFive);

// for each of the element this callback function will be called
["Jonas", "Martha", "Adam"].forEach(highFive);

/* for example, the add event listener function on its own would have no idea of what to do whenever the click event happens here so that's why we pass in the callback function here, to tell the add event listener function exactly what to do */
