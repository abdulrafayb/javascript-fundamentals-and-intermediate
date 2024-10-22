const neighbors = ["Karachi", "Hyderabad", "Nawabshah"];

neighbors.push("Balochistan");

neighbors.pop();

if (neighbors.includes("Balochistan")) {
  console.log("It's Included");
}

console.log(neighbors.indexOf("Hyderabad"));

neighbors[1] = "Sukkur";

neighbors[neighbors.indexOf("Nawabshah")] = "Hyderabad";

console.log(neighbors);
