const express = require('express');
const { pool } = require('../database/pool');
const Directors = require('../database/directors');

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const PORT = 4000;

app.get("/hello", (req, res) => {
  res.send("Hello, folks! 🤠");
});

app.get('/directors', (req, res) => {
  Directors.getDirectors(pool)
    .then(response => res.status(200).json({ directors: response.rows }))
    .catch(err => res.status(500).send('Error getting directors'));
});

app.get('/directors/:id', (req, res) => {
  const id = req.params.id;
  Directors.getDirectorById(pool, id)
    .then(response => {
      if (response.rowCount === 0) return res.status(404).send('Director not found')
      res.status(200).json({ director: response.rows })
    })
    .catch(err => res.status(500).json({
      message: `Error getting director by id ${id}`,
      error: err
    }));
})

app.get('/directors-movies', (req, res) => {
  Directors.getDirectorsAndMovies(pool)
    .then(response => res.status(200).json({ directors_movies: response.rows }))
    .catch(err => res.status(500).json({
      message: `Error getting directors and movies`,
      error: err
    }));
})

app.post('/directors', (req, res) => {
  Directors.insertDirector(pool, req.body)
    .then((response) => {
      res.status(201).send({ message: 'director added successfully!', director: response.rows });
    })
    .catch((error) => {
      res.status(500).send({ message: 'Error on the server side :(', error })
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
