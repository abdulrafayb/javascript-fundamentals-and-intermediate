"use strict";

/* we have used map, filter, and reduce methods in isolation up until now, but here we are gonna chain all these methods together one after another, we can chain as many methods we want as long as they return a new array, map and filter methods returns new array but reduce method returns a value, we can imagine chaining as a pipeline that processes our data by going through all sorts of steps from beginning to end then providing us with desired result */

/* when we chain methods, it can be a little bit hard to debug, and to inspect the bug we can then use the third parameter of the callback function to get the entire array to see the result of the previous operation/method */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  // .map((mov) => mov * 1.1)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * 1.1;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

/* we should never overuse chaining, we should try to optimize it because chaining tons of methods one after the other can cause real performance issues if we have really huge arrays, we should try to compress all the functionality that they do into as little methods as possible, like we may create way more map methods than we actually need where we can just do it all in just one map call, and it's a bad practice in JS to chain methods that mutate the underlying original array, and an example of that is splice or reverse method, in large scale applications its good practice to avoid mutating arrays */
