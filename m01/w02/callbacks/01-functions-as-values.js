// Regular function
/**
 * Parts of a function
 * 1) "function" keyword
 * 2) name of the function
 * 3) inside parenthesis () we can pass ARGUMENTS
 * 4) inside curly brackets {} we can decide WHAT THE FUNCTION DOES
 */

// DEFINITION OF A FUNCTION
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// If a function doesn't have a return at the end, it will add one by default returning UNDEFINED
function addTwoNumbersInConsole(num1, num2) {
  console.log(num1 + num2);
  return undefined;
}

// CALLING A FUNCTION
const result1 = addTwoNumbers(5, 4);
const result2 = addTwoNumbers(3, 3);
const finalResult = addTwoNumbers(result1, result2);

// const resultConsole = addTwoNumbersInConsole(5, 4);


/**
 * What does it mean to have functions that are treated as values?
 */

function getTriangleArea(base, height) {
  return (base*height)/2;
}

const myValue = getTriangleArea;

// This is just showing the function definition or reference to the function
// console.log(myValue);

// This is executing the function
// console.log(myValue(3,3));


/**
 * Where can I store a function as a value?
*/
function sayHello() { return 'hello' }

const array = [1, "hello, world! 🌎", false, sayHello];
console.log(array[3]());


const myObject = {
  myFunction: sayHello
}

myObject.myFunction();

