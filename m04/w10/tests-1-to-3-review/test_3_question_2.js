/**
 * TEST 3
 * QUESTION 2
 */

const partition = function (arr, callback) {
  const leftArray = [];
  const rightArray = [];

  arr.forEach(item => {
    const isLeftItem = callback(item);
    if (isLeftItem) return leftArray.push(item);
    return rightArray.push(item);
  });

  return [ leftArray, rightArray ];
};

const example1 = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0);
console.log(example1);
// => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]

const example2 = partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0);
console.log(example2);
// => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]
