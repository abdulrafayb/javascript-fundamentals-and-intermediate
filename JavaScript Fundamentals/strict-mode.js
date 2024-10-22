"use strict";

/* it allows us to write more secure code, makes it easier to avoid accidental errors, it helps us introduce bugs into our code because of two reasons, first one is that it forbids us to do certain things, second one is that it will actually create visible errors for us in certain situations where without this mode JS will simply fail silently without letting us know we did a mistake */

let hasDriversLicense = false;
const passTest = true;

/* created a bug here, we can see it by adding or removing strict mode, it tells us that the variable down below isn't defined while without it it didn't tell, and another one it does is not let us name our variables with words reserved for features
if (passTest) hasDriverLicense = true; */
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "audio";
// const private = 50;
