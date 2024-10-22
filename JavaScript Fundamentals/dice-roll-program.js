const totalNumbers = 6;
let dice = Math.trunc(Math.random() * totalNumbers) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * totalNumbers) + 1;
}

console.log(`You've finally rolled a ${dice}`);
