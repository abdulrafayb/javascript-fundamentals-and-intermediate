"use strict";

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

/* we wrap the function into paranthesis tricking JS to think it is just a function expression, we don't assign the function to any variable and then we immediately call it, because of this pattern its called (IIEF) */
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
  var isItPrivate = 23;
})();

/* in modern JS, IIEF are not used anymore because if all we want is to create a new scope for data privacy then we can create a block like down below, there's no need to create a function to create a new scope unless we want to use "var" for our variables */

{
  const isPrivate = 23;
  var notPrivate = 23;
}

// console.log(isPrivate);
// console.log(isItPrivate);
console.log(notPrivate);

// arrow functions as (IIFE)
(() => console.log("This will also never run again"))();

/* this method was invented because we already know that functions create scopes, what's important here is that global scope doesn't have access to variables from inner scope, data being encapsulated */

/* the scope chain works in a way that inner scope would have access to anything defined outside in the global scope but the global scope doesn't have access to anything that is inside a certain scope, therefore we say all data defined inside a scope is private */

/* data being made private within some scope is important because of data encapsulation and privacy, sometimes we need to protect our variables from being overwritten by some other parts of the program */
