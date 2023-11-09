/**
 * TEST 3
 * QUESTION 1
 */

const arrayToObject = function (arrayToParse) {
  let parsedObject = {};
  arrayToParse.forEach(arrayItem => {
    parsedObject[arrayItem[0]] = arrayItem[1];
  });

  return parsedObject;
};

console.log(arrayToObject(
  [
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]
));
// => { a: 1, b: 2, c: 3 }

const result = arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]);
console.log(result);
// => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}