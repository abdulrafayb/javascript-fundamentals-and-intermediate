"use strict";

/* we analyze the four ways in a which a function is called, if a function is called as a method, as a function attached to a object, then the this keyword inside the method will point towards the object, and in normal functions meaning not as a method or attached to any object, in this case this keyword will be undefined and that is only valid for strict mode otherwise this keyword will point to the global object, which in case of the browser is the window object */

/* if we use the this keyword in an arrow function, it will simply be the this keyword of the surrounding function, the parent function, and in technical terms this is called lexical this keyword because it simply gets picked up from the outer lexical scope of the arrow function */

/* if the function is called as an event listener then the this keyword will always point towards to the DOM element that the handler function is attached to */

console.log(this); // points towards the global object

// in a regular function call the this keyword will return undefined because the function doesn't have any owner
const calculateAge = function (yearOfBirth) {
  const currentYear = 2024;
  console.log(currentYear - yearOfBirth);
  console.log(this);
};

calculateAge(2000);

// in case of arrow functions, it will point to global object because arrow functions doesn't get their own this keyword
const calculateAgeArrow = (yearOfBirth) => {
  const currentYear = 2024;
  console.log(currentYear - yearOfBirth);
  console.log(this);
};

calculateAgeArrow(2000);

// in case of objects, it will point to the object
const rafay = {
  year: 2000,
  currentYear: 2024,
  calculateAge: function () {
    /* the this keyword will not simply point at the object in which we wrote the method, just because we have written this keyword in this object doesn't mean it will point towards this object, its because the method called to this object */
    console.log(this);
    console.log(this.currentYear - this.year);
  },
};

rafay.calculateAge();

// here in another object, we do method borrowing to prove the point above by borrowing the above method in this object below
const muffins = {
  year: 2002,
  currentYear: 2024,
};

muffins.calculateAge = rafay.calculateAge;
/* this keyword always points towards to the object that the method is calling, here because the second method calls it so it points towards the second object even though it the method of the first object that is borrowed, a subtle difference */
muffins.calculateAge();

// the this keyword is really dynamic, not static, and it depends on how the function is called

// here we take the function out of the first object
const f = rafay.calculateAge;
// f(); // this keyword returns undefined because this just becomes a regular function not attached to any object
