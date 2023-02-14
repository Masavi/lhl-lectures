/**
 * Callbacks
 * - It's a parameter/argument to a Higher Order Function
 * 
 * Higher Order Functions
 * - It takes a Function as an argument. That function taken as
 *   an argument is a CALLBACK.
 */

// Higher Order Function
function sayHello(myFunction) {
  const result = myFunction(5,3);
  return `Hi, how are you doing? 😀 the result is: ${result}`;
}

function add(num1, num2){ return num1 + num2 }

// Using a named function "add"
console.log(sayHello(add));

// Using an Anonymous Function
console.log(sayHello( (num1, num2) => num1+num2 ) )



// onClick( () => {} )