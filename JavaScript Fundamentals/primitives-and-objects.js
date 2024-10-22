"use strict";

/* when we talk about memory and memory management, it's usual to call primitives, primitive types and objects, reference type because of the different way in which they are stored in memory, primitive types are stored in call stack meaning in the execution context in which they are declared and reference types are stored in memory heap */

/* for each primitive variable JS creates a so-called unique identifier with the variable name, then a piece of memory will be allocated with a certain address, and finally the value will be stored in memory at the specified address, the identifier actually points to the address which holds the value and not to the value itself, subtle distinction, values at certain addresses are immutable meaning they are not changeable, and if value is changed then the identifier simply point to the new address and the previous memory adress stays the same, that's why they are immutable */

/* with references, it works a bit differently, when anew object is created it is stored in the heap and such as before there is a memory address and the value itself, but here the identifier does not point towards the newly created memory address in the heap but rather to the new piece of memory created in the stack, then this memory in stack will point towards the object that's in the heap by using the memory address as its value, in other words, the piece of memory in call stack has a reference to the piece of memory in the heap which holds the object, and that's why its called reference type */

/* it works this way because objects are too large to be stored in the call stack so instead they are stored in the heap which is like an almost unlimited memory pool and stack just keeps a reference to where the object is actually stored in the heap */

/* so now when we create a new variable now set equal to previously created object, now the new variable's identifier will point to the exact same memory address as the object, and that address contains the reference which then points to the object itself, this way the new object is essentially the exact same as the previous object, so when change the property of new object, so the value is changed in the heap thus changing value for both the objects, and even if the previous object is declared with const, we still can manipulate its value because we don't change the value in memory so the identifier still point to the same value which is the reference to the object, all we did was change the value in the heap, so it's a misconception that all variables declared with const are immutable, it is true for primitive values but not for reference values */

// whenever we think that we're copying an object, we are just creating a new variable that points to the exact same object

// primitives example
let lastName = "Williams";
let oldLastName = lastName; // at this point lastName is Williams that's why variable's value isn't changed
lastName = "Davis";
console.log(lastName, oldLastName);

// reference types example
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

/* we are just copying the entire object, but in actual we are just copying the reference that points to the exact same object
const marriedJessica = jessica; // even though is declared with const still the value changed 
marriedJessica.lastName = "Davis"; // will give a result that we don't want
console.log("Before Marriage: " + jessica);
console.log("After Marriage: " + marriedJessica); 
const is supposed be constants, however what needs to be constant is the value in the stack, but in this case, the value only holds the reference which isn't exactly changed, the only thing we are changing is the underlying object that is stored in heap and that has got nothing to do with const or let 

marriedJessica = {};
we also can't do this, because now we are setting already declared object to a new empty object, as this new object will be stored at a different position in memory and therefore the reference to that position in memory will have to change here in this variable because it is declared with const, but with let it will work */

/* what if we really wanted to copy the object so that we could then change one of them without changing the other, there is a way to do that and that is by using a function object.assign, and what is does is to essentially merge two objects and then return a new one, so down below we simply merge an empty new object with the previous object, and this then creates a completely new objects */
const jessicaCopy = Object.assign({}, jessica);

jessicaCopy.lastName = "Davis";

console.log("Before Marriage: " + jessica.lastName);
console.log("After Marriage: " + jessicaCopy.lastName);

jessicaCopy.family.push("Mary", "John");

/* this technique to copy objects create a problem, it only works on the first-level, in other words, if we have objects inside an object then the inner object will actually still be the same, it will still point to the same place in memory, so this function only creates a shallow copy and not a deep clone, because family property is a deeply nested object so the function didn't copy it to the new object, so both have the same property called family which point at the same object in the heap, and that object is array which wasn't copied to new object */

console.log("Before Marriage: " + jessica.family);
console.log("After Marriage: " + jessicaCopy.family);

// to actually create a deep clone we would need external libraries like lo-dash
