function addTwoNumbers(num1, num2) {
  return num1+num2;
}

function addNumbersInArray(arrayOfNumbers) {
  let total = 0;

  // for -> when we need an iterator or know the index
  // for-in -> more frequently used with objects
  // for-of -> when i need to access each item in an array without looking at the index
  for (const number of arrayOfNumbers) {
    total += number;
  }

  return total;
}

function isOdd(number) {
  if(typeof number !== 'number') {
    return 'this is an error :('
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

/**
 * In Node.js, we get to access and use something called
 * MODULE.EXPORTS
 * 
 * module.exports allow us to export anything from one file, and use it somewhere else
 */

module.exports = {
  addTwoNumbers,
  addNumbersInArray,
  isOdd,
}

/**
 * We only do ONE module.exports, so we don't overwrite our export
 */
// module.exports = addTwoNumbers;

/**
 * There is another syntax you can use to export your functions as you define them
 */
// module.exports = {
//   addTwoNumbers: function (params) {
//     // ...
//   },
//   addNumbersInArray: function (params) {
//     // ...
//   }
// }