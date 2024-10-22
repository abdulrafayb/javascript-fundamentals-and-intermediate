"use strict";

/* how we can create and fill arrays programmatically, so far we have simply created arrays like we have below, basically writing them out by hand literally */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log([1, 2, 5, 6, 7, 4]);
console.log(new Array(1, 2, 5, 6, 7, 4));

/* but in most cases we basically already have the data, however we can generate arrays programmatically without having to define all the items/elements manually */

/* by using array constructor function, and whenever we only pass one argument in the function then it creates a new empty array with that length, and we can't use this array for anything like we can't call map method on it, we can only call one method on this empty array which is the fill method, and this method does mutate the original array, and is also similar to slice method */

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));
console.log(x.fill(1));

/* besides the value that we want to fill the array with, we can also specify where we want it to start to fill, we can also specify an end parameter where we want it to end the filling and final index is not included, we can also use fill method on other arrays, it doesn't have to be an empty array */

const y = new Array(7);
console.log(y.fill(1, 3, 5));

numbers.fill(20, 4, 6);
console.log(numbers);

/* if we want to create an array containing values form 1 to 7, then we can use the array.from function, here we are not using the 'from' here as a method on an array, we are using it on the array constructor which is a function object and on that we call from method, into this function here we can pass in an object with the length property and the second argument is a mapping function exactly like map method */

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const random = Array.from(
  { length: 20 },
  (cur) => Math.trunc(Math.random(cur) * 6) + 1
);
console.log(random);

/* we used an underscore which means throwaway variable, its a convention that we use when we don't need a certain parameter, it is to denote we are not using the first parameter which would the values */

/* this array.from function was introduced in JS in order to create arrays from array like structures, so-called iterables, so they can be converted to real arrays with this function besides these obvious iterables like maps and sets, another great example of array like structure is the result of querySelectorAll as it returns a nodeList which is something like an array containing all selected elements but not an actual array and it doesn't have most of the methods that an actual array have like map and reduce method, but we can convert the NodeList to array and use all array methods on it and for that array.from function is perfect */

// so if we had to take the values from the user interface itself
labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll("movements__value"),
    map((el) => Number(el.textContent.replace("$", "")))
  );
  console.log(movementsUI);

  // another way of doing the same thing but here we have to apply the map method separately
  const movementsUItwo = [...document.querySelectorAll("movements__value")];
});

// if we wanted to color every second or third row then we'll use the remainder operator
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movement__row")].forEach(function (row, i) {
    // 0, 2, 4, 6, ...
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    // 0, 3, 6, 9, ...
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});
