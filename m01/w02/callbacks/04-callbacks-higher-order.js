const mexicanFood = ['tacos', 'enchiladas', 'pozole', 'chilaquiles'];

/**
 * CALLBACK
 * A function that is passed as the argument of another function
 */
const logFood = (element, index, array) => {
  console.log('The dish ' + element + ' is at position ' + index)
  console.log('This is the array:', array);
}

/**
 * HIGHER ORDER FUNCTION
 * A function that receives a function as an argument
 */
// mexicanFood.forEach(logFood);

/**
 * Let's create our own HIGHER ORDER FUNCTION,
 * recreating the FOR EACH.
 */

const animalsArray = [
  'frog',
  'bear',
  'penguin',
  'raccoon',
  'lion',
  'another frog 🐸',
]

// animalsArray.forEach((animal) => {console.log(animal)})
const myForEach = (array, callback) => {
  for(let i=0; i<array.length; i++) {
    callback(array[i], i, array);
  }
}

myForEach(
  animalsArray,
  (animal, index, array) => {
    console.log(`${animal} is at index ${index}`);
    console.log(array);
  }
)

