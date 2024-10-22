"use strict";

/* map method is yet an another way to loop over an array but unlike for each method which doesn't return anything, map method will give us a brand new array, and this new array will contain each position the results of applying the callback function to the original array elements */

console.log("Map Method");

/* suppose these movements are in euros and we want to convert them into dollars, and lets say one euro is worth 1.1 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

/* const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
  }); */

const movementsUSD = movements.map((mov) => mov * eurToUSD);

console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUSD);
}

console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);

/* filter method is used to filter elements the satisfy a certain condition, here we also a callback function to define those conditions */

console.log("\nFilter Method");

const deposits = movements.filter(function (value) {
  return value > 0;
});

console.log(deposits);

const depositsFor = [];
for (const value of movements) {
  if (value > 0) {
    depositsFor.push(value);
  }
}

console.log(depositsFor);

const withdrawals = movements.filter((value) => value < 0);
console.log(withdrawals);

/* we can use for of loop just as we use these methods for, these methods are used in JS for functional coding, which is used in modern JS, and the practical implication for using these methods would be when we want to chain them basically use them one after another to build something big which is not possible with for loop */

/* we use the reduce method to essentially boil down all the elements in an array to one single value meaning adding up all the numbers in an array, this method also uses a callback function, and here unlike map and filter, the first parameter of callback function is accumalator, and it works as summing all the values together, and the rest three are the same, so it just gets an extra parameter, and the reduce method gets two parameter as well, first one the function and the other one is the initial value of the accumulator  */

console.log("\nReduce Method");

/* const balance = movements.reduce(function (acc, cur, i) {
  console.log(`Iteration ${i + 1}: ${acc}`);
  return acc + cur;
  }, 0); */

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balanceFor = 0;
for (const mov of movements) {
  balanceFor += mov;
}

console.log(balanceFor);

/* we can also use reduce method to find the maximum value, because reduce is for boiling down the array into just one single value and value can be whatever we want it to be, it doesn't have to be sum, it could be multiplication or many other things, it is by far the most powerful array method */

const max = movements.reduce((acc, value) => {
  if (acc > value) return acc;
  else return value;
}, movements[0]);

console.log(max);
