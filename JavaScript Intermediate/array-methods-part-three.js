"use strict";

/* we use the find method to retrieve one element of an array based on a condition, it is similar to filter method but unlike filter method, the find method will not return a new array but it will only return the first element in the array that satisfies the assigned condition */

console.log("\nFind Method");

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);

/* two fundamental differences between filter and find method, first one is that filter method returns all the elements that matches the condition while find method only returns the first one, second one is that filter method returns a new array while find method returns the element itself */

console.log(firstWithdrawal);

const accountOne = {
  owner: "Abdul Rafay",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const accountTwo = {
  owner: "Peter Griffin",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const accountThree = {
  owner: "Stewie Griffin",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const accountFour = {
  owner: "Brian Griffin",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

/* practical use case of working with an array of objects, in this context find method actually becomes really useful, we can use find method to basically find an object in the array based on some property of that object, where one array contains multiple objects which all have a similar structure (owner, movements, pin), using find method then we can search this array to find an object that matches a certain property that we already know, and in the case below its the name */

const accounts = [accountOne, accountTwo, accountThree, accountFour];

const account = accounts.find((acc) => acc.owner === "Peter Griffin");
console.log(account);

/* the goal of the find method is to just find exactly one element and therefore we usually set up a condition where only one element can satisfy that condition and so that's why we used the equal operator above and this equal operator will only ever match one account with above name */

for (const account of accounts) {
  if (account.owner == "Peter Griffin") {
    console.log(account);
  }
}

/* find index method is like a close cousin of find method, and this method returns the index of the found element in an array, not the element itself  */

/* some method is similar to includes method which tests if an array includes a certain value, so it essentially tests for equality, but if we want to test for a certain condition instead, like if there have been any deposits into the bank, that's where we'll use the some method, and whenever we see or hear the word any then its probably a good use case for the some method */

console.log("\nSome Method");

console.log(movements.includes(70));

const anyDeposits = movements.some((mov) => mov === 70); // mov > 0, 5000
console.log(anyDeposits);

/* every method is pretty similar to some method, the difference is that every method returns true if all the elements in the array satisfy the condition that we pass in, if every element passes the condition in our callback function only then the every method would return true */

console.log("\nEvery Method");

console.log(movements.every((mov) => mov > 0));
console.log(accountFour.movements.every((mov) => mov > 0));

/* up until this point, we have always written the callback function directly as an argument into our array methods, however we can also write this function separately and then pass the function as a callback, and then we can reuse the same function for all kinds of different methods that require callbacks with a true/false condition */

const deposit = (mov) => mov > 0;
console.log(accountFour.movements.some(deposit));
console.log(accountFour.movements.every(deposit));
console.log(accountFour.movements.filter(deposit));

/* flat method turns a nested array into a one single array, and the flat method only goes one-level deep when flattening the array, but we can also fix that with the depth argument, its usually set to 1 which is default, one example of its use case is that if the banks wants to calculate the overall balance of all accounts */

console.log("\nFlat Method");

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const deepArr = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(deepArr.flat(2));

/* const accountMovements = accounts.map((acc) => acc.movements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallMovements = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallMovements); */

// with chaining
const overallBalanceOne = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalanceOne);

/* using a map method first and then flattening the result with flat method is a pretty common operation, that's why flatmap method was introduced which combines map and flat method together into one method to improve performance, but flatmap method only goes one-level deep and it can't be changed */

console.log("\nFlat Map Method");

const overallBalanceTwo = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalanceTwo);
