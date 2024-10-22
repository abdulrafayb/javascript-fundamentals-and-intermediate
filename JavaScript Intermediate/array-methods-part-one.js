"use strict";

// array methods are simply functions that are attached to them

const arr = ["a", "b", "c", "d", "e"];

// these methods are the same as strings methods, this returns a new array, doesn't change the original array
console.log("Slice Method");
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

/* we can use the slice method to create a shallow copy of any array, to do that we call the method without any arguments, and we can do the same thing with the spread operator as well */
console.log("\nCreating Copies");
console.log(arr.slice());
console.log([...arr]);

/* splice method works the same as slice method, the fundamental difference is that it actually changes the original array, it removes the extracted part from the original array, it used to delete elements from the array, one common use case is to simply remove the last element */
// console.log(arr.splice(2));
console.log("\nSplice Method");
arr.splice(-1);
console.log(arr);
/* first argument means at what index it should start, second argument means the number of elements it should take from that defined index from first argument */
arr.splice(1, 2);
console.log(arr);

const arrOne = ["e", "d", "c", "b", "a"];
const arrTwo = ["f", "g", "h", "i", "j"];

// reverse method reverses the array and also mutates the original array
console.log("\nReverse Method");
console.log(arrOne);
arrOne.reverse();
console.log(arrOne);

// concat method combines two arrays
const letters = arrOne.concat(arrTwo);
console.log("\nConcat Method");
console.log(letters);
// combining with spread operator
console.log([...arrOne, ...arrTwo]);

// join method
console.log("\nJoin Method");
console.log(letters.join(", "));

/* in certain situations, we might not want to mutate the original array and then we can't use any of those methods which mutates the original array */

const arrThree = [10, 20, 30];
console.log("\nAt Method");
console.log(arr[0]);
console.log(arr.at(0));

/* the at method, does the same thing as brackets notation, we specify an index and it gets us that value. there is one particularity of at method which makes it quite useful to use like if we wanted to get the last element of the array without knowing the length, the at method makes it easier, it also works on strings */

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("rafay".at(0));
console.log("rafay".at(-1));

/* for each method requires a callback function, it technically a higher-order function, when for each method loops over the array it calls the callback function in each iteration it executes meaning it is called times length of the array, and in each iteration it passes the current element of the array as an argument, and we give the for each method instructions by giving it a callback function which contains these instructions meaning we are giving it instructions in the form of callback function */

console.log("\n");

// positive values are deposits and negative ones are withdrawals
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) { // gets us only the value
// this is how we access the counter variable in the for-of loop
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    // removes the negative sign
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("\nFor Each Method With Arrays");

/* to access the counter variable in for each method we specify them in our parameter list, as in each iteration the for each method passes the current element of the array with its index and the entire array to the callback function, and the order matters in the parameter list but the names don't, first parameter needs to be current element, second one needs to be index and the third one entire array */

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

/* the break and continue statements do not work in for each loop method so it always loops over the entire array, so if we want to break out of loop then we should use for of loop, for each method is also available for sets and maps */

console.log("\nFor Each Method With Maps");

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log("\nFor Each Method With Sets");

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

// sets don't have indexes, the underscore here in JS means a throwaway variable which is completely unnecessary
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}`);
});
