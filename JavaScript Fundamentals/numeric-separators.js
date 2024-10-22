"use strict";

/* numeric separators is a feature in JS to format numbers in a way that it becomes easier for us to read and understand really big numbers, but if we need to store numbers in string, or we get a number as a string from an api, then we shouldn't use this feature because JS will not be able to parse the number correctly out of that string */

const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee = 15_00;
console.log(transferFee);

console.log(Number("230_000")); // doesn't work here
console.log(parseInt("230_000")); // returns only 230 and everything after the underscore will be ignored
