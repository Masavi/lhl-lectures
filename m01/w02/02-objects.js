/**
 * Inside Objects, we usually two types of KEY:VALUE pairs...
 * - PROPERTIES: describe the object
 * - METHODS: actions or behaviour that the object can perform
 */

const dog = {
  // PROPERTIES
  name: "Santa's Little Helper",
  breed: 'Greyhound',
  age: 15,
  family_members: ["Homer", "Marge", "Lisa", "Bart", "Maggie"],
  vaccine_chart: { rabies: true, covid: true },
  // METHODS
  eatDogFood: function() {
    // "this" keyword allows us to access anything from within the same object
    return this.name + 'of' + this.age + 'years old is eating dog food! woof woof!'
  }
}

// How to access values
console.log(dog.breed);
console.log(dog.vaccine_chart.rabies)

// It's different to access the DEFINITION
console.log(dog.eatDogFood)
// Than accessing the EXECUTION
console.log(dog.eatDogFood())

// How modify or add values to our object
dog.breed = 'Wiener';
console.log(dog.breed);

dog.sayHi = function(message) {
  return 'Hello ' + message; 
}

console.log(dog.sayHi('January Cohort!'));

// How to delete a key of an object
delete dog.breed
console.log(dog.breed);

console.log('\n-------------\n');

// How to look at all the values using a for loop
// We can use a "FOR IN"
for (const key in dog) {
  if (Object.hasOwnProperty.call(dog, key)) {
    const element = dog[key];
    console.log('key:', key);
    console.log('value:', element);
  }
}

// Other ways of accessing keys and values...
console.log("Array of keys:", Object.keys(dog));
console.log("Array of values:", Object.values(dog));

// call object, not do anything to it
dog;
dog.sayHi;
dog.sayHi();