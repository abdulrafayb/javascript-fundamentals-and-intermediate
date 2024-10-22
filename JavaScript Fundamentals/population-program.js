/* topics covered are declaring variables, finding data types, using basic operators, strings and template literals, if-else statements, equality operators and conditional or ternary operator */

const country = "Pakistan";
const continent = "Asia";
let population = 231;
const isIsland = false;
const language = "Urdu";
console.log(
  "Country: " + country,
  "Continent: " + continent,
  "Population: " + population
);
console.log(
  "Type Of isIsland: " + typeof isIsland,
  "\nType Of Population: " + typeof population,
  "\nType Of Country: " + typeof country,
  "\nType Of Language: " + typeof language
);

population = 241;
const halfPopulation = population / 2;
console.log("Population: " + population);
console.log("Half Population: " + halfPopulation);

population++;
console.log("Population Incremented: " + population);
console.log(population > 6);
console.log(population > 33);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log("Description: " + description);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

if (language === "English" && population < 50 && !isIsland) {
  console.log(`you should live in this ${country}!`);
} else {
  console.log(`You should not live in this ${country}!`);
}

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
