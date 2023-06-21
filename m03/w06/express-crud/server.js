const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true })); // Handles data in regular HTML form submission (req.body)
app.use(morgan('dev')); // Logs each received request into the console
app.set('view engine', 'ejs'); // to set templates view engine (ejs)

/**
 * DATABASE
 */

const moviesDatabase = [
  { id: 1, title: 'Lost in Translation', director: 'Sofia Coppola' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
]

/**
 * RENDERING ROUTES
 * designed to allow the user to fetch html+css+js to show an interface on the browser
 */

// Homepage
app.get('/', (req, res) => {
  res.render('index');
})

// Browse Movies
app.get('/movies', (req, res) => {
  const templateVars = {
    movies: moviesDatabase
  };

  res.render('movies-show', templateVars);
})

// Look at the info of one single Movie
app.get('/movies/:idMovie', (req, res) => {
  const { idMovie } = req.params;
  const foundMovie = moviesDatabase.find(movie => movie.id === Number(idMovie));
  const templateVars = { movie: foundMovie };
  res.render('movie-show', templateVars);
})

// Shows the form to edit a new Movie
app.get('/movies/:idMovie/edit', (req, res) => {
  const { idMovie } = req.params;
  const foundMovie = moviesDatabase.find(movie => movie.id === Number(idMovie));
  const templateVars = { movie: foundMovie };
  res.render('movie-edit', templateVars);
})

// Shows the form to edit a new Movie
app.get('/movies-new', (req, res) => {
  res.render('movie-new');
})

/**
 * API ROUTES
 * designed to allow clients to fetch or manipulate data
 */

app.post('/api/movies/new', (req, res) => {
  const { title, director } = req.body;
  const newMovie = { id: (moviesDatabase.length + 1), title, director };
  moviesDatabase.push(newMovie);
  console.log(moviesDatabase);
  res.redirect(`/movies/${newMovie.id}`);
})

app.post('/api/movies/:idMovie/edit', (req, res) => {
  const { idMovie } = req.params;
  const { title, director } = req.body;

  const foundMovie = moviesDatabase.find(movie => movie.id === Number(idMovie));
  foundMovie.title = title;
  foundMovie.director = director;

  res.redirect(`/movies/${idMovie}`);
})

app.post('/api/movies/:idMovie/delete', (req, res) => {
  const { idMovie } = req.params;

  moviesDatabase.forEach((movie, index) => {
    if (movie.id === Number(idMovie)) {
      console.log('found');
      moviesDatabase.splice(index, 1);
      console.log(moviesDatabase);
    }
  });

  res.redirect(`/movies`);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
