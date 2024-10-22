"use strict";

/* remainder operator simply returns the remainder of a division, one use case for this operator is to check whether a certain number is even or odd, and whenever we have to do something nth time then its a good idea to use this operator */

console.log(5 % 2);
console.log(8 % 3);

console.log(6 % 2); // even numbers are divisible by 2, meaning remainder is zero

const isEven = (n) => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(3));
