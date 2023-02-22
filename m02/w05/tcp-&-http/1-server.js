const net = require('net');
const server = net.createServer();

// IP ADDRESS: 127.0.0.1 -> localhost -> Identifier for my device
// PORT NUMBER: localhost:3000
// Usually the first 3000 port numbers shouldn't be touched...
const PORT = 3000;

server.on('connection', (client) => {
  console.log('Connection has been stablished!');
  // console.log('Here is the client:', client);
  client.on('end', () => {
    console.log('Client just left ♥');
  })
})

server.on('error', () => { console.log('Error happened!'); })

// ALWASY GOES AT THE END, after configurations have been done
server.listen(PORT, () => { console.log('Server listening on port 3000') });

// IP ADDRESS -> Location depending on where we are connected
// MAC ADDRESS -> Physical identifier for a Physical device