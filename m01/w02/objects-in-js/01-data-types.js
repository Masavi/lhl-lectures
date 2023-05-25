/* 
  Primitive Types
*/

var message = "Hello, world!";  // String
var doesItExist = true;         // Boolean
var age = 20;                   // Number
// Bigints are defined by adding an 'n' at the end of the gigantic number 
var numberOfStarsInTheGalaxy = 10293819028401985148019481n;
var fruits = undefined;         // Undefined
var vegetables = null;          // Null
var id = Symbol('01');          // Symbol

/* 
  Object Types
*/

// Functions

// 1. Definiton of the function, so i can use it (call it, invoke it, execute, it...)
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// 2. Exection of the function, which is transformed into whatever "return" has to the right side
var result = addTwoNumbers(5, 3);

// 3. Showing the result of "return" in console
// console.log(result);
// console.log(addTwoNumbers instanceof Object)

// Arrays
var shoppingList = [
  "napkins",     // In arrays, everything is stored with an index, which is the POSITION
  "toilet paper"  // INDEX -> POSITION INSIDE THE ARRAY
];

// console.log(typeof shoppingList);
// console.log(shoppingList[2]);

/* 
  Objects

  Are used to describe ANYTHING from the real world.
  They contain KEY:VALUE pairs, which are used to hold what are know as PROPERTIES.

  PROPERTIES are used to describe attributes/things/information about the object at hand.
*/

var person = {
  // key: value
  name: 'Mauricio',
  last_name: 'Saavedra',
  occupation: 'Instructor',
  years_of_experice: 4.5,
}

// Objects don't work with INDEXES nor POSITIONS, like arrays do
// console.log(person[0])

// We have TWO WAYS of accessing values in objects

// 1) By using brackes[] and the key as a string
console.log(person["last_name"])

// 2) By using dot. and the key as plain text
console.log(person.years_of_experice)

/**
 * Key differences between using ARRAYS vs OBJECTS
 */

// 1) If POSITION is important, use an ARRAY
var customers_queue = ['Nazia', 'Jean-Pierre']

// 2) If ACCESSING A VALUE REGARDING OF POSITION is important, use Objects
// var movie = ["Titanic", "James Cameron", "2001", "Drama"];
// var movie2 = ["Horror", "The Fly", "1995", "David Cronemberg",];

var movie = { title: 'Titanic', director: 'James Cameron' }
var movie2 = { title: 'The Fly', director: 'David Cronemberg' }