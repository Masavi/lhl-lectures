// 1) Regular function
function getSquareArea(side) {
  return side*side;
}

// 2) Anonymous functions
const myFunction = function (side){
  return side*side;
}

myFunction(3);

// const array = [1, "hello, world! 🌎", false, myFunction];
// const array = [1, "hello, world! 🌎", false, function (side){
//   return side*side;
// }];

// 3) Arrow functions
const arrowFunction = (side) => {
  return side*side;
}

arrowFunction(2);

// const array = [1, "hello, world! 🌎", false, arrowFunction];
// const array = [1, "hello, world! 🌎", false, (side) => {
//   return side*side;
// }];

/**
 * ARROW FUNCTIONS don't change the 'this' keyword
 * NORMAL FUNCTIONS set their own 'this' keyword
 */
(() => {
  console.log('Yeah')
})()