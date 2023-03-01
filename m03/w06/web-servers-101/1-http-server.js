const http = require('http');
const PORT = 3030;

const server = http.createServer();

/**
 * CONFIGURATIONS
 * (BEHAVIOUR OF MY SERVER)
 */

// client -> GET REQUEST localhost:3030/about
server.on('request', (request, response) => {
  console.log('Request method ->', request.method);
  console.log('Request url ->',request.url);

  if (request.method === 'GET' && request.url === '/') {
    response.write('Welcome to MY WEBSITE!')
  }

  else if (request.method === 'GET' && request.url === '/about') {
    response.write('You are now in the ABOUT page!')
  }

  else {
    response.write('404 NOT FOUND :(')
  }
  
  response.end();
})

/**
 * LISTEN FOR INCOMING REQUESTS
 */
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
