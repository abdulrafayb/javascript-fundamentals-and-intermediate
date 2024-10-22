"use strict";

/* we have two kinds of timers in JS, settimeout and setinterval, the first one runs only once after a defined time while the second one keeps running forever until we stop it */

/* settimeout function receives a callback function which is the first argument, and it is the settimeout function who will call it in the future, and when does that future arrive is what we define in the second argument, the second argument takes in the value in milliseconds, it is important to realize that the overall code execution doesn't stop here but rather when it reaches this point it will simply call the settimeout function and will essentially register the callback function of the function here to be called later and then the overall code execution simply continues */

/* we can use settimeout to execute some code at some point in the future, we can use this to simulate ordering of a pizza, when we order a pizza, it doesn't arrive right away, instead it takes some time and we can simulate that */

/* and if we needed to pass some arguments in the callback function, so we will pass arguments after the second argument like we have below, here the third argument becomes the first parameter of our callback fucntion and so on, and we can actually cancel the timer atleast until the delay is actually passed like we have below with if condition, we use the clear timeout function to basically delete the timer, and since it contains spinach then this part will not be executed now */

const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  (ingOne, ingTwo) =>
    console.log(`here is your pizza with ${ingOne} and ${ingTwo}`),
  3000,
  ...ingredients
  // "olives", "spinach" // spread operator takes out the elements and put them like this, so both fuctionalities will work out
);

/* as soon as JS hit the lines of code above, it will simply keep counting the time in the background and register the callback function to be called after that time has elapsed and then immediately JS will move on to the next line which is below, and this mechanism is called asynchronous JS */

console.log("waiting");

if (ingredients.includes("spinach")) {
  clearTimeout(pizzaTimer); // takes in the name of the timer, so lets assign our settimeout function to a variable
}

/* so we know that settimeout function simply schedules a function to run after a certain amount of time but the callback function is executed only once, and if we wanted to run a function over and over again, like every five seconds or every ten minutes, for that we have the setinterval function, and lets use to create a clock */

setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

/* to stop setinterval function, we can use clearinterval function, just as we used cleartimeout function to stop the settimeout function */
