const request = require('request');

// request.get('https://www.google.com/', (error, response, body) => {
//   // DNS -> Domain Name System
//   console.log(body);
// })

request.get('https://pokeap.co/api/v2/pokemon/megatron', (error, response, body) => {

  console.log(error);

  if (response.statusCode === 200) {
    // Transform data from the server into a JSON: JavaScript Object Notation
    const pokemon = JSON.parse(body);
    // console.log(json);
    console.log(`The pokemon name is ${pokemon.name} and its height is: ${pokemon.height}`);
  }

  if (response.statusCode === 404) {
    /**
     * HTTP STATUS CODES
     * 100 - Protocol Info
     * 200 - Everything's OK
     * 300 - Redirection
     * 400 - Client did something wrong
     * 500 - Server did something wrong
     */
    console.log('Status Code:', response.statusCode);
  }

});