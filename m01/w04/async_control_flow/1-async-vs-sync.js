// Synchronous runs first, then  Asynchronous

/**
 * Asynchronous
 */
setTimeout(() => {
  console.log('First timer');
}, 3000)

setTimeout(() => {
  console.log('Second timer');
}, 3000)

setTimeout(() => {
  console.log('Third timer');
}, 3000)

/**
 * Synchronous
 * it is sequential, like a waterfall
 */
console.log('Starting program...');

for (let i=0; i<=1000; i++) {
  console.log('position:', i);
}

console.log('Program has finished executing 🏁');

