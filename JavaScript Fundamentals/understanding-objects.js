const rafay = {
  firstName: "Abdul",
  lastName: "Rafay",
  friends: ["Adil", "Umar", "Momin"],
};

const nameKey = "Name";

/*const findDetails = prompt(
  "What do you want to know about Rafay? Choose between his firstName, lastName, and friends"
);

console.log(rafay[findDetails]);*/
console.log(rafay["first" + nameKey]);
console.log(
  `${rafay.lastName} has ${rafay.friends.length} friends, and his best friend is ${rafay.friends[0]}`
);

rafay.age = 23;
rafay["location"] = "Karachi";

console.log(rafay);
