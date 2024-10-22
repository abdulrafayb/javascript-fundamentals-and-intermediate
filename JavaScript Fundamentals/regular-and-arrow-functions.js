"use strict";

// some pitfalls of this keyword related to regular and arrow function

const currentYear = 2024;
var firstName = "Rafay"; // now this keyword in the greet function will point to this firstName (not here but in the browser will)

/* when we declare objects, { }, these doesn't create block-scope, so all this belongs in global scope, therefore the greet function doesn't work, and best practice is to never use arrow functions as methods */
const abdul = {
  firstName: "Abdul",
  year: 2002,

  calculateAge: function () {
    console.log(this);
    console.log(currentYear - this.year);

    /* another problem when we have a function inside a method but there are two solutions to this problem, first one is to use an extra variable like we have below outside the function because there this keyword points to object, so JS will go up in the scope chain to look for the value of this keyword, but it is an outdated solution
    const self = this;
    const isMillenial = function () {
      console.log(this);
      console.log(self);
      console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    here the this keyword returns undefined because it is just a regular function call, we haven't attached it to a object
    isMillenial(); */

    /* here we have an another solution used in modern JS which is to use an arrow function because it doesn't have it's own this keyword, it will simply use the this keyword from its parent-scope meaning parent function */
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    // here the parent scope of this keyword is the global-scope, so we get undefined because firstname doesn't exist in global-scope
    console.log(`Hey, ${this.firstName}`);
  },
};

abdul.greet();
abdul.calculateAge();

/* functions also get access to an arguments keyword like this keyword and it is only available to regular functions but not arrow functions, and this is useful when we need a function to accept more parameters than we actually specified, like we can use a loop and then loop over the arguments array and add all the numbers together, but it is not important anymore in modern JS */

const addExpression = function (a, b) {
  console.log(arguments); // returns an array of all arguments
  return a + b;
};

addExpression(2, 4, 6, 8); // arguments

var addArrow = (a, b) => {
  // console.log(arguments); // here we get an error that arguments is not defined
  return a + b;
};

addArrow(2, 4, 6, 8);
