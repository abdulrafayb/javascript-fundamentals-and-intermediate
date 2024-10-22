const rafay = {
  firstName: "Abdul",
  lastName: "Rafay",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(rafay);

console.log(rafay.lastName);
console.log(rafay["lastName"]);

const nameKey = "Name";
console.log(rafay["first" + nameKey]);
console.log(rafay["last" + nameKey]);

// console.log(rafay.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Rafay? Choose between firstName, lastName, age, job, and friends"
);

if (rafay[interestedIn]) {
  console.log(rafay[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

rafay.location = "Pakistan";
rafay["twitter"] = "@abdulrafay";
console.log(rafay);
