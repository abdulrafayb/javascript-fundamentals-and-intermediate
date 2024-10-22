const myCountry = {
  country: "Pakistan",
  capital: "Islamabad",
  language: "Urdu",
  population: 243,
  neighbours: ["India", "China", "Iran", "Afghanistan"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    // this.isIsland = !Boolean(this.neighbours.length);
    return this.isIsland;
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);
