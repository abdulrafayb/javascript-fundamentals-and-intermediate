function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let descriptionPakistan = describeCountry("Pakistan", 6, "Islamabad");
console.log(descriptionPakistan);
