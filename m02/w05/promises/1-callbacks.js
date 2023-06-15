// Synchronous
const addTwoNumbers = (number1, number2, callback) => {
  const result = number1 + number2;
  callback(result);
}

// console.log(
//   addTwoNumbers(15, 15, (result) => {
//     console.log('Hello from within the callback!');
//     const array = [result, result.toString()];
//     return array;
//   })
// );


// Async Example
setTimeout(
  () => { console.log('2 seconds elapsed!') },
  2000,
);

setTimeout(
  () => { console.log('3 seconds elapsed!') },
  3000,
);