"use strict";

/* if we don't use the strict mode then this changes scoping, function then are no longer block-scoped but become function-scoped, and there are other changes as well */

/* variable environment is part of execution context, and here we are gonna take a closer look at the variable environment and in particular at how variables are actually created in JS, */

/* we have a mechanism in JS which is hoisting, and it basically make some type of variables accessible or usable in code before they are actually declared in the code, is scans the code for variable declarations before it is executed and this happens during the creation phase of execution context, then for each variable found in the code a new property is created in a variable environment object, and hoisting doesn't work the same for all variable types */

/* function declarations are hoisted and the initial value in the variable environment is set to the actual function, and in practice we can use function declarations before they are actually declared in code, because they are stored in the variable environment object even before the code starts executing */

/* variables declared with var are also hoisted, but hoisting works in a different way here, when we try to access a var variable before it is declared in a code, we don't get the declared value but we get undefined, one might expect to get an error when using a variable before declaring it, this behaviour creates bugs and this is why in modern JS var is never used */

/* const and let variables are not hoisted, technically they are, but their value is basically set to uninitialized, so there is no value to work with, so in practice it is as if hoisting never happened, instead we say that these variables are placed in TDZ which makes it so that we can't access the variables between the beginning of the scope, if we attempt to use them before declarartion we get an error */

/* TDZ also exist to make the const variables actually work the way they are supposed to, as we can't reassign a value to const variables so it will not be possible to set them to undefined first and then assign their real values later, so it's only assigned when variable actually reaches declaration */

/* hoisiting was implemented so that we can use function declarations before their actual declaration because this is essential for some for some programming techniques such as mutual recursion */

// using the three variables defined below before they are actually declared
console.log(lastName); // we get undefined
// console.log(job); // here we get uninitialized error for both
// console.log(yearOfBirth); // because these variables are in TDZ, and it starts from beginning of the scope, from line 18 to 23

// creating three different variables using three different ways
var lastName = "Rafay";
let job = "Programmer";
const yearOfBirth = 2000;

// we were able to call function declaration before it is actually declared in the code
console.log(addDeclaration(2, 2));
// console.log(addExpression(2, 2)); // here we get uninitialized error
// console.log(addArrow(2, 2)); // here we get uninitialized error
// console.log(withVar);
// console.log(withVar(2, 2)); // undefined(2, 2), so we get undefined is not a function

// hoisting with function declarations
function addDeclaration(a, b) {
  return a + b;
}

// hoisting with function expression (follows the same rule as variable declarations)
const addExpression = function (a, b) {
  return a + b;
};

// hoisting with arrow function (follows the same rule as variable declarations)
const addArrow = (a, b) => a + b;
var withVar = (a, b) => a + b;

// an example to demonstrate a pitfall of hoisting
console.log(numProducts); // we get undefined here
// as undefined is a falsy value it will return false, and negation then returns true
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted successfully!");
}

/* best practice is to never declare variables with var, and always declare variables with const, only with let if you want to change the value later on, in order to write clean code one should always declare variables at the top of each scope, and also declare all your functions first and only use them after declaration */

// window === shows global objects

// example to see one more small difference between them
var x = 1;
let y = 1;
const z = 1;

/* lets take a look at window object in the console (just write window in console), and window is the global object of the JS in the browser, it shows all kinds of information like all variables and functions declared in code base, variables declared with const and let do not create any property in the window object but variables declared with var does */

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
