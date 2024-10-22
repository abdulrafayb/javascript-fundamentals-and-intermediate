"use strict";

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

/* something to think about is how can the booker function update the passenger variable value that's defined in secureBooking function that actually has already finished executing, as its execution context is no longer on the stack, but booker function is still able to access the variable that should no longer exist */

/* as the variable doesn't exist in the current scope so JS will immediately look into the closure to see if it can find the variable there and it does this even before looking into the scope chain, so even if there was a passengerCount present in global scope it would still look and use the one in closure, meaning that closure has priority over scope chain */

booker();
booker();
booker();

console.dir(booker);

/* in the output of dir we observe, [[Scope]]: Scopes[3], and whenever you see double bracket then it means it is an internal property which we can't access from our code */

// example to show that we don't need to return a function from another function in order to create closure
let f;

const g = function () {
  const a = 23;
  // reassigning the variable a function value
  f = function () {
    console.log(a * 2);
  };
};

// the f fucntion close-over the variable of the execution context in which it was defined

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

/* as we reassign the function again to a new value then that old closure basically disappears and then new closure is created for the variable b, so closures can change when variables are reassigned */

h();
f();

// another example with timer
const boardPassenger = function (n, wait) {
  // usually boarding happens in group of 3
  const perGroup = n / 3;

  /* set timeout is a function and needs two parameters, first one is a function which will execute (which we can say is a callback function) and second is time in ms, and this callback function accessed variables that are defined in the boardPassenger function that long finished execution because of closure*/
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

/* we created this variable here to prove closures have priority over scope chain because if it wasn't for closure then it would use this value but it doesn't even though it is in the global scope, but the callback function close-over the variable that is defined inside the function */
const perGroup = 1000;
boardPassenger(180, 3);

// another example
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  // function was able to access header because it remembers all variables present at the birth time of the parent function
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
