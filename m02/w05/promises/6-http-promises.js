const requestPromise = require('request-promise');

requestPromise.get('https://www.google.com')
  .then((body) => {
    console.log(body);
    return requestPromise.get('anotherwebsite')
  })
  .catch((error) => {
    console.log(error)
  });