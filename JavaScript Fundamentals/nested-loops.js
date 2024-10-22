const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log("Neighbour: " + listOfNeighbours[i]);
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log([i][j] + listOfNeighbours[i][j]);
  }
}
