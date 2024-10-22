"use strict";

const airline = "TAP Air Portugal";
const plane = "Airbus 320neo";

console.log(plane[0]);
console.log(plane[1]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

// end parameter doesn't add the last value to the string, it doesn't extract index[7] value
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // length will always be end minus beginning (7-4 = 3)

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// with negatives, it will start counting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// function that receives an airplane seat and logs to the console whether it's a middle seat or not
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat!");
  } else {
    console.log("You got lucky!");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// process of boxing (creates a new string which is a object)
console.log(new String("Rafay"));
console.log(typeof new String("Rafay"));
// when the operation is done it converts it back to string
console.log(typeof new String("Rafay").slice(1));

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());
console.log("Rafay".toUpperCase());

// fixing the capitalization of a passenger name
const passenger = "RaFaY";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// fixing and comparing emails
const email = "hello@gmail.com";
const loginEmail = "  Hello@Gmail.com \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
// other way (can call two methods as well), we also have trimStart() and trimEnd()
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing characters
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);
// replacing entire words
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); //only replaces the first word, not the second
console.log(announcement.replaceAll("door", "gate"));
/* simple regular expression (g flag, stands for global meaning all occurrences will be targeted), regular expressions are one of the most complex and confusing topics of programming */
console.log(announcement.replace(/door/g, "gate"));

// boolean methods that return true or false
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

// function that checks if baggage contains something illegal
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // its best practice to put everything to lowercase before comparing
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

// splits the string using a divider
console.log("a+very+nice+string".split("+"));
console.log("Abdul Rafay".split(" "));
// split and join with destructuring
const [firstName, lastName] = "Abdul Rafay".split(" ");
const newName = ["Mr.", firstName, lastName].join(" ");

// function that capitalizes names
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");

// padding a string means to add a number of characters until the string has a desired length
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Rafay".padStart(20, "+").padEnd(30, "+"));

// function that does masking (hides the starting number from credit card)
const maskCreditCard = function (number) {
  // when on of the operand of plus sign is a string then it will convert all operands to string
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(3566002020360505));
console.log(maskCreditCard("3566002020459701"));

// repeat method
const messageAirport = "Bad weather... All Departures Delayed ";
console.log(messageAirport.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planeInLine(5);
