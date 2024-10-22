"use strict";

// without the set method
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again!"],
]);

// quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(question.get(answer === question.get("correct")));

// converting map to array
console.log([...question]);
// console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
