"use strict";

/* to create a date there are exactly four ways and they all use the date constructor function but can accepts different parameters, the first way is below */

const now = new Date();
console.log(now);

// second way is to parse a date from a string
console.log(new Date("Sun Sep 15 2024 19:38:52"));
console.log(new Date("December 24 2015")); // not a good idea to do this

// third way is to pass in year, month, day, hour, minute, second
console.log(new Date(2020, 10, 19, 15, 23, 5)); // months in JS are zero-based (0-11)
console.log(new Date(2020, 10, 31)); // as november only has 30 days then JS will automatically correct it to 1st dec

console.log(new Date(0)); // to get initial unix time
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 + converting a day to milliseconds (means 1 day) => 4 days

/* dates that we create are special types of objects so therefore they have their own methods, and we can use these methods to get or set components of a date */

console.log("\nObjects");

const future = new Date(2030, 10, 19, 15, 23);
console.log(future); // future which simply is a object because we stored a constructor function value in it
console.log(future.getFullYear()); // so we can use methods on it
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); // returns day of the weeek not month
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());
console.log(future.getTime()); // returns timestamp. time in milliseconds from the initial unix time
// console.log(new Date.now()); // returns current timestamp

// methods to set
future.setFullYear(2040);
console.log(future);

/* we can do calculations with dates, we can subtract one date from another date in order to calculate how many days have passed between the two dates, and whenever we convert a date to a number the result is the timestamp in milliseconds, and with them we can perform calculations */

console.log("\nCalculations");

const date = new Date(2030, 10, 19, 15, 23);
console.log(+date);

const daysPassed = (dateOne, dateTwo) =>
  Math.abs(dateTwo - dateOne) / (1000 * 60 * 60 * 24);
console.log(daysPassed(new Date(2030, 3, 14), new Date(2030, 3, 24)));

/* for precise calculations such as time changes due to daylight saving changes or other edge cases like that, then we can use a date library, moment.js */

/* JS has a internationalization API, it allows us to easily format numbers and strings according to different languages, with this we can make our application support different languages, such as currencies and dates, and to get these differnt codes, search for ISO language code table and visit lingoes */

console.log("\nInternationalizationOfDates");

const nowDate = new Date();
/* we can also add some options to customize the format, as it only displays the date right now but not the time, but we can change that by providing an option object to the datetmeformat function as a second argument */
const optionsDate = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // numeric, 2-digit
  year: "numeric", // 2-digit
  weekday: "long", // short, narrow
};
/* in many situation, it is not recommended to define locale manually, but instead to simply get it from user's browser, as it is done below */
const locale = navigator.language;
console.log(locale);
const newDate = new Intl.DateTimeFormat(locale, optionsDate).format(nowDate);
console.log(newDate);

/* we can also format numbers with internationalization API, and here we have to set the currency manually because it is not determined by the locale, by the country */

console.log("\nInternationalizationOfNumbers");

const num = 3252354.43;
const optionsNum = {
  style: "currency", // percent, unit
  unit: "mile-per-hour", // celcius
  currency: "EUR", // unit will be ignored
  // useGrouping: false, // numbers will be shown without the separators
};

console.log("US: ", new Intl.NumberFormat("en-US", optionsNum).format(num));
console.log("GR: ", new Intl.NumberFormat("de-DE", optionsNum).format(num));
console.log("SY: ", new Intl.NumberFormat("ar-SY", optionsNum).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, optionsNum).format(num)
);
