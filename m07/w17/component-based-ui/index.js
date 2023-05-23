const array = [1, 2, 3, 4, 5];

// Regular way of accessing array elements
const first = array[0];
const second = array[1];
console.log(first, second);

// Destructuring syntax (ES6-beyond)
const [one, two] = array;
console.log('Destructuring:', one, two);

// Function execution vs Function reference
function addTwoNumbers(n1, n2) {
  return n1 + n2;
}

// Calling the function
addTwoNumbers(1, 4);

// Reference to the function
() => addTwoNumbers(1,4);


// Destructuring in objects

const person = { name: 'Bob', age: 30, country: 'Philipines' };
const { country, age } = person;

console.log(country, age);
