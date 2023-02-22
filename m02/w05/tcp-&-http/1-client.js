const net = require('net');

const client = net.createConnection({
  host: 'localhost',
  port: 3000,
});

setTimeout(() => {
  client.end();
}, 2000)