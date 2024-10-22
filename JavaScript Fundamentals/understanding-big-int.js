"use strict";

/* bigint is a special type of integers, numbers are represented internally as 64 bits and that means there are exactly 64 ones or zeros to represent any given number, and of these 64 bits only 53 are used to actually store the digits themselves, the rest are for storing the position of the decimal point and the sign, if there are only 53 bits to store the number that means there is a limit of how big numbers can be */

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

/* any integer that is larger than this, is not safe meaning it can't be represented accurately, and in some situations we might really need big numbers, such as databse ids or when we interact with real 60 bit numbers, or we might from an api get a number larger than the above number, then we would have no way of storing these numbers, that's why we have bigint which can store numbers as large as we want, n basically transforms a number into bigint  */

console.log(12391748916489189231209309124891274891283n);
console.log(BigInt(12391748916489189231209309124891274891283)); // this constructor funtion should only be used with small numbers

console.log(100000n + 100000n);
console.log(127489120371291782947092n * 29148912891293n);
// console.log(Math.sqrt(16n)); // math operations don't work on bigint

/* it is not possible to mix bigints with regular int, so we have to explicitly convert the int into bigint and here the constructor function comes handy */

const huge = 235814891270938120938n;
const num = 23;

console.log(huge * BigInt(num));

console.log(20n > 15);
console.log(20n === 20); // triple operator does not do type coercion, these two values have different primitive type
console.log(typeof 20n);
console.log(20n == 20); // JS does type coercion, converting bigint into regular number
console.log(20n == "20");

console.log(huge + "is really BIG!!!"); // huge will not be converted to string

console.log(10n / 3n); // returns the closest number, cutting the decimal part off
console.log(10 / 3);
