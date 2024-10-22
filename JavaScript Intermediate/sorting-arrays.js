"use strict";

/* there are countless algorithms and methods of sorting values, JS also has a built-in sort method, but it actually mutates the original array, */

console.log("\nSort Method");

const alphabets = ["A", "Z", "R", "J"];
console.log(alphabets.sort());

// sorting it like 1, 4, 5, 7, 8
const numbers = [43, 11, 85, 520, 71];
console.log(numbers.sort());

console.log(movements);
// console.log(movements.sort());

/* these numbers are not in any way sorted, the reason is sort method does sorting based on strings, it converts everything to strings and then it does the sorting, we can fix this by in a compare callback function into the sort method, and it only takes two parameters, the current value and the next value meaning two consecutive numbers in the array */

// ascending
/* movements.sort((a, b) => {
  if (a > b) return 1; // return positive, B A, switch order
  if (b > a) return -1; // return negative, A B, keep order
});
console.log(movements); */
movements.sort((a, b) => a - b);
console.log(movements);

// descending
/* movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
console.log(movements); */
movements.sort((a, b) => b - a);
console.log(movements);
