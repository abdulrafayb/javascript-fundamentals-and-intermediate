"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

// with key, we only get property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// with values, we only get property values
const values = Object.values(openingHours);
console.log(values);

// with entries, we loop over entire object as it returns keys and values as a pair
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// maps has the same array structure that we get from calling entries method so we can convert object to map, its a trick for when you need maps but you also have a similar object
console.log(Object.entries(openingHours));
const mapHours = new Map(Object.entries(openingHours));
console.log(mapHours);
