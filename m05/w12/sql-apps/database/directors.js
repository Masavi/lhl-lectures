const getDirectors = (pool) => {
  return pool.query('SELECT * FROM directors');
}

const getDirectorById = (pool, id) => {
  const query = {
    name: 'fetch-director-by-id',
    text: 'SELECT * FROM directors WHERE director_id = $1',
    values: [id],
  }

  return pool.query(query);
}

const getDirectorsAndMovies = (pool) => {
  return pool.query('SELECT * FROM movies JOIN directors ON movies.directed_by=directors.director_id');
}

const insertDirector = (pool, body) => {
  const query = 'INSERT INTO directors (first_name, last_name, country) VALUES($1, $2, $3) RETURNING *';
  const values = [body.first_name, body.last_name, body.country];
  return pool.query(query, values);
}

module.exports = {
  getDirectors,
  getDirectorById,
  getDirectorsAndMovies,
  insertDirector,
}