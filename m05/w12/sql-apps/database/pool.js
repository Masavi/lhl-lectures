const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'lhl',
  password: 'admin',
});

/**
 * How to do queries?
 */

// pool.query('SELECT * FROM directors', (err, directors) => {})
// pool.query("SELECT * FROM directors WHERE country='USA'")
//   .then((response) => {
//     console.log('Success! 🎈\n', response.rows);
//     pool.end();
//   })
//   .catch((error) => {
//     console.log('Error: \n', error);
//     pool.end();
//   })

module.exports = { pool };
