"use strict";

/* some mathematical operations we have used so for are plus, minus, times, divided, exponentiation and so now we will begin square root, and just like many other functions square root is a part od math namespace, we can also use the exponentiation operator to achieve the same result */

console.log("SQRT");
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // only way to calculate cubic root

/* max function returns the maximum value, and it actually does type coercion before returning the value like below when it converts the string to number, but it doesn't do parsing like below, and just like max, we also have min */

console.log("\nMAX/MIN");
console.log(Math.max(2, 4, 6, 8));
console.log(Math.max(2, 4, "8", 6));
console.log(Math.max(2, 4, "8px", 6)); // results in NaN

console.log(Math.min(4, 6, 8, 2));

/* besides a couple of methods, there are constants on math object or math namespace, like pi, which is a constant, so we can calculate the area of a circle */

console.log("\nPI/RANDOM/TRUNC");
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.random()); // returns number between 0-1
console.log(Math.trunc(Math.random())); // trunc removes the decimal part
console.log(Math.trunc(Math.random() * 6)); // returns number between 0-5

/* so now we generalize a formula and create a function to generate random integers between two values, and how it works is represented in multiple steps, 0..1 => 0..(max - min) => min..(max - min + min) => min..max, this represent '=>' going onto the next step */

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

/* to round integers, we have multiple methods, like trunc and round, round method always round to the nearest integer, we have floor which rounds up, and we have ceil which rounds down and with negative numbers rounding works the other way for floor and ceil, and all these methods also do type coercion */

console.log("\nTRUNC/ROUND");

console.log(Math.trunc(23.4));
console.log(Math.trunc("23.4"));

console.log(Math.round(23.3));
console.log(Math.round("23.6"));

console.log("\nFLOOR/CEIL");
console.log(Math.floor(23.3)); // rounds up/backwards
console.log(Math.floor("23.6"));
console.log(Math.floor(-23.6)); // rounds down

console.log(Math.ceil(23.3)); // rounds down/upwards
console.log(Math.ceil("23.6"));
console.log(Math.ceil(-23.6)); // rounds up

/* to round decimals, it works a little bit different, with decimals we have to specify the numbers in parenthesis, and then on that number we call the tofixed method, and it always returns a string not a number */

console.log("\nTOFIXED");

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3)); // adds zeros after decimal part until it has three decimal parts
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // to convert to number we add + operator

/* since all these values are primitives so they don't have methods, so behind the scenes JS does boxing as we have learned previously, boxing transforms this to a number object then call the method on that object, and when the operation is finished it converts it back to primitive */
