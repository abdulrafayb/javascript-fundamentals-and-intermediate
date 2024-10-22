// math operators
const now = 2037;
const ageAbdul = now - 1991;
const ageRafay = now - 2018;
console.log(ageAbdul, ageRafay);

console.log(ageAbdul * 2, ageAbdul / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Abdul";
const lastName = "Rafay";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// comparison operators
console.log(ageAbdul > ageRafay); // >, <, >=, <=
console.log(ageRafay >= 18);

const isFullAge = ageRafay >= 18;

console.log(now - 1991 > now - 2018);
