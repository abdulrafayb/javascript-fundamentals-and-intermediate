"use strict";

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

const accounts = [accountOne, accountTwo, accountThree, accountFour];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* exercies 1: calculate how much has been deposited in total in the bank, in all the accounts across the bank, so we get all the different movement arrays out of the accounts array and them putting them in one flat array then filtering and adding them together */

const bankDepositSumOne = accounts.map((accs) => accs.movements).flat();
const bankDepositSum = accounts
  .flatMap((accs) => accs.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

/* exercise 2: count how many deposits there have been in the bank with atleast 1000$, it can be done in two ways, in the second way we can see that reduce method can also be used to count something */

const sumDeposit1000One = accounts
  .flatMap((accs) => accs.movements)
  .filter((mov) => mov >= 1000).length;

const sumDeposit1000 = accounts
  .flatMap((accs) => accs.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);
// .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(sumDeposit1000);

/* the plus plus operator didn't give the expected result above, the plus plus operator does increment the value but it still returns the previous value, so it increased the value of count to 1 but returned zero so it stays zero through all iterations, it returns the incremented value in the next line/iteration but when we want the incremented value in the sam iteration it will not return the incremented value, but there is a solution to that which is prefix */

let a = 10;
console.log(a++);
console.log(++a);
console.log(a);

/* exercise 3: we are to create a new object instead of a number/string using reduce method, which contains the sum of the deposits and withdrawals */

const { deposits, withdrawals } = accounts
  .flatMap((accs) => accs.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur); // with dot notation and brackets notation
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      /* in arrow function function the value is automatically, only implicitly returned when we don't have a function body with curly braces, but here we do have them so therefore we have to explicitly/manually return the accumulator's value from the function */
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

/* exercise 4: create a simple function to convert any string to title case */

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("and here is an another title with an example"));
