"use strict";

/* in this code base we cover how numbers work in JS, how to convert values to numbers, how to check if certain values are numbers or not */

/* in JS, all numbers are presented internally as floating point numbers, basically always as decimals, and we only have one data type for all numbers, numbers are represented internally in a 64 base 2 format, that means numbers are always stored in a binary format composed of only 0s and 1s */

console.log(23 === 23.0);

/* in binary form, it is very hard to represent some fractions/numbers that are very easy to represent in the base 10 system, like fraction 0.1, we get an infinite fraction unlike base 10 where it would just (0.3), php and ruby are the same as this */

console.log(0.1 + 0.2);

/* we can't do precise scientific or financial calculations in JS, because of problems like below, this is a problem with JS language that we just have to accept */

console.log(0.1 + 0.2 === 0.3);

/* converting strings to numbers, there are two ways, the second way works because when JS sees the plus operator it will do type coercion, it will automatically convert all the operands to numbers */

console.log(Number("23"));
console.log(+"23");

/* we parse a number from a string, on the number object which is a function, because every function is also an object, and the number object has some methods to do parsing, we use parseint function specifying a string that even includes symbols, JS will then automatically figure out the numbers that are in the strings, but these strings have to start with a number otherwise we will get NaN, its useful in situations where we get some kind of unit from CSS and then we can easily get rid of that unit, parseint function also takes in a second argument which is so-called regex, and regex is the base of numeral system that we are using, and below we are using base 10 numbers (0-9), and we also have parsefloat function for decimals */

console.log("\nparsing");
console.log(Number.parseInt("30px"), 10);
console.log(Number.parseInt("e30px"), 10);

console.log(Number.parseInt("2.5rem"), 2);
console.log(Number.parseFloat("2.5rem"), 2);
console.log(Number.parseFloat("  2.5rem  "), 2);

/* these two functions above are also called global functions, so we can call them without the number object, but this is the more traditional and old-school way of doing it, but in modern JS it is encouraged to call these functions on the number object, its because number provides namespace for all these different functions */

console.log(parseInt("30px"), 10);
console.log(parseFloat("2.5rem"), 2);

/* another function of the number namespace, isnan, basically to check if the value is not a number, but this function doesn't consider the 'infinity' value case, we also have another function, isfinite, to check if a value is a number, it does consider 'infinity' value case, we should use them when working with floating numbers */

console.log("\nisNAN");
console.log(Number.isNaN(20));
console.log(Number.isNaN(20 / 0)); // gives a special value "infinity" that exists in JS
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X")); // NaN

console.log("\nisFinite");
console.log(Number.isFinite(20));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
