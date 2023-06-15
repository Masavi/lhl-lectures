setTimeout(() => {
  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber >= 0.5) {
    console.log('Number is bigger or equal than 0.5!');
  } else {
    console.log('Number is smaller than 0.5');
  }
}, 3000);

// Promises
/**
 * Gives us a better way to handle the outcome of an
 * asynchronous operation. This async operation could be
 * successfull or a failure, depending on the context
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber >= 0.5) {
      // Resolved is married to .then()
      resolve(randomNumber);
    } else {
      // Reject is married to .catch()
      reject(randomNumber);
    }
  }, 3000)
})

promise
  .then((result) => {
    console.log('RESOLVED with result:', result)
  })
  .catch((result) => {
    console.log('REJECTED with result', result)
  })