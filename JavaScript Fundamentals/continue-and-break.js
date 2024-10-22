const rafay = [
  "Abdul",
  "Rafay",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(rafay[0])
// console.log(rafay[1])
// ...
// console.log(rafay[4])
// rafay[5] does NOT exist

for (let i = 0; i < rafay.length; i++) {
  // Reading from rafay array
  console.log(rafay[i], typeof rafay[i]);

  // filling types array
  // types[i] = typeof rafay[i];
  types.push(typeof rafay[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < rafay.length; i++) {
  if (typeof rafay[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof rafay[i] === "number") break;

  console.log(rafay[i], typeof jonas[i]);
}
