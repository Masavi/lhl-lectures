const request = require('request');

request.get('https://www.google.com', (error, response, body) => {
  if (error) return console.log('ERROR:', error);
  console.log(response.statusCode);
  console.log(body);
})