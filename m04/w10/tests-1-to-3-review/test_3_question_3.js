/**
 * TEST 3
 * QUESTION 3
 */

const deepArrayToObject = function (arr) {
  if (!Array.isArray(arr)) throw new Error('You have to pass an array!');

  const obj = {};

  for (const keyValue of arr) {
    const isArray = Array.isArray(keyValue)
    if (!isArray) throw new Error('You have to pass an array inside the array!');

    let value;

    if (Array.isArray(keyValue[1])) {
      value = deepArrayToObject(keyValue[1]);
    } else {
      value = keyValue[1];
    }

    obj[keyValue[0]] = value;

    // const key = keyValue[0];
    // const value = keyValue[1];
    // const isArray = Array.isArray(keyValue[1]);

    // obj[key] = isArray ? deepArrayToObject(value) : value;
  }

  return obj;
};

const result1 = deepArrayToObject([
  ['a', 1],
  ['b', 2],
  ['c',
    [
      ['d', 4]
    ]
  ]
])
console.log(result1);
// => { a: 1, b: 2, c: { d: 4 } }

const result2 = deepArrayToObject([
  ['a', 1],
  ['b', 2],
  ['c',
    [
      ['d',
        [
          ['e', 5], ['f', 6]
        ]
      ]
    ]
  ]
])
console.log(result2);
// => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }