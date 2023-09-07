/**
 * TEST 3
 * QUESTION 0
 */

const objectToArray = function (objectToParse) {
  const keys = Object.keys(objectToParse);
  const array = keys.map(key => {
    return [ key, objectToParse[key] ];
  })

  return array;
};

console.log(objectToArray({ a: 1, b: 2, c: 3 }));
// => [['a', 1], ['b', 2], ['c', 3]]

console.log(objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10}));
// => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]