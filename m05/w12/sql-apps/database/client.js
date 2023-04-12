const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'lhl',
  password: 'admin',
});

/**
 * Connecting using PROMISES
 */
client.connect()
  .then((response) => console.log('Database connected!'))
  .catch((error) => console.log(error));

/**
 * Connecting using CALLBACKS
 */
// client.connect((err, success) => {
//   console.log('There is an error: \n', err);
//   console.log(success);
// });

/**
 * How to do queries?
 */

// client.query('SELECT * FROM directors', (err, directors) => {})
client.query("SELECT * FROM directors WHERE country='USA'")
  .then((response) => {
    console.log('Success! 🎈\n', response.rows);
    client.end();
  })
  .catch((error) => {
    console.log('Error: \n', error);
    client.end();
  })