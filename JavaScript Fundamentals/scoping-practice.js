"use strict";

/* const and let variables are blocked-scoped and var is function-scoped only meaning it will accessible outside of (if-else), and in modern JS functions are also blocked-scoped in strict-mode meaning functions declared inside a block are only accessible inside those blocks */

/* in lexical scoping, the way we can access variables depends on where the scope is placed meaning where it is written on the code, if the two scopes are not inside one another meaning they're both child scopes or sibling scopes, so by the rules of lexical scoping, they can't access each others variable */

/* the scope chain only works upward, not downward or sideways, meaning all children scopes get access to variables from their parent scopes, and we would get reference error if it can't access a certain variable because it doesn't exist in global scope or it is in child scope */

// this function is defined in global scope that's because it is here in top level code and also has its own scope
function calculateAge(yearOfBirth) {
  const age = currentYear - yearOfBirth;

  // this a children function of the above function and also creates its own scope which can't be accessed by parent scope
  function printAge() {
    let output = `${lastName}, your age is ${age}, born in ${yearOfBirth}.`;
    console.log(output);

    // (if-else) statements are block-scoped
    if (yearOfBirth >= 1981 && yearOfBirth <= 1996) {
      var millenial = true;

      /* creating a new variable with the same name as outer scope's variable, and this doesn't changes the variable's value, JS simply looks for the lastName variable in the current scope and doesn't look up for the lastName that's in the global scope, and they are completely different variables, they just have the same name, and there is no problem in that because they are defined in different scopes, but outside this scope the lastName variable's value will be coming from global scope */
      const lastName = "Abdul Rafay";

      /* the above explanation is also the reason why we can have different functions with same parameter names because each parameter is only defined in that function's scope */

      /* here we redefine a variable from a parent scope inside an inner scope, so here we're not creating a new variable like above but simply reassigning a value, and it works because we manipulated an existing variable here inside the child scope that we accessed from the parent scope */
      output = "NEW OUTPUT!";

      const str = `oh, you're a millenial, ${lastName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str); it doesn't work because its called outside the block
    console.log(millenial); // this works because var is not block-scoped
    // console.log(add(3, 7)); it doesn't work because functions are also block-scoped, its being called outside the block
    console.log(output);
  }

  printAge();

  return age;
}

// global variables
const lastName = "Rafay";
const currentYear = 2024;

/* even thought the variables above are defined after the function but it's not a promble as the code in function is only executed once it's actually called */

calculateAge(1995);

/* here we will not be access the age variable because only an inner scope can have access to outer scope but not the other way around, here we are in outer scope and can't access variables in inner scope, and the same goes for the functions as well
console.log(age);
printAge(); */
