const express = require('express');
const { uid } = require('uid');
const app = express();
const PORT = 4000;

/**
 * DATABASE
 */
const database = [
  { id: '1', title: 'The Godfather', director: 'Francis Copolla' },
  { id: '2', title: 'Lost in Translation', director: 'Sofia Copolla' },
];

/**
 * MIDDLEWARES
 */
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

/**
 * ROUTES
 * 1. help you navigate different sections of a website
 * 2. help you access data, mainly from a database
 * Enable us to respond back to a client request, however we feel like
 */

app.get('/', (req, res) => {
  res.render('index');
})

/**
 * RENDER ROUTES (VIEWS)
 */

// List all the movies (READ)
app.get('/movies', (req, res) => {
  const templateVars = { movies: database }
  res.render('movies', templateVars);
})

// Show one movie (READ)
app.get('/movies/:idMovie', (req, res) => {
  const id = req.params.idMovie;
  const foundMovie = database.find((movie) => movie.id === id)
  const templateVars = { movie: foundMovie }
  res.render('movie', templateVars);
})

// Show form to add new movie (READ)
app.get('/movie-new', (req, res) => {
  res.render('movie-new');
})

// Show form to edit one movie (READ)
app.get('/movie-edit/:idMovie', (req, res) => {
  const id = req.params.idMovie;
  const foundMovie = database.find((movie) => movie.id === id)
  const templateVars = { movie: foundMovie }
  res.render('movie-edit', templateVars);
})

/**
 * API ROUTES (DATA)
 * CRUD OPERATIONS
 * (CREATE, READ, UPDATE, DELETE)
 */

// CREATE
app.post('/api/movies', (req, res) => {
  // const title = req.body.title;
  // const director = req.body.director;
  const { title, director } = req.body;

  const newMovie = {
    id: uid(3),
    // title: title,
    title,
    // director: director,
    director,
  }

  database.push(newMovie);

  console.log('database', database);

  // This is to send the raw data
  // res.json(newMovie);

  // This is to redirect the user to the "browse movies" view
  res.redirect('/movies');
})

// READ (ALL)
app.get('/api/movies', (req, res) => {
  res.json({ movies: database })
})

// READ (ONE)
app.get('/api/movies/:idMovie', (req, res) => {
  const id = req.params.idMovie;
  const foundMovie = database.find((movie) => movie.id === id)
  res.json({ movie: foundMovie })
})

// UPDATE (ONE)
app.post('/api/movies/:idMovie/edit', (req, res) => {
  const title = req.body.title;
  const director = req.body.director;

  const id = req.params.idMovie;

  const updatedMovie = {
    id,
    title,
    director,
  }

  database.forEach((movie, index) => {
    if (movie.id === id) {
      database[index] = updatedMovie;
    }
  })

  // This sends the raw data
  // res.json({ movie: updatedMovie });

  // This redirects to another view
  res.redirect('/movies')
})

// DELETE (ONE)
app.get('/api/movies/:idMovie/delete', (req, res) => {
  const id = req.params.idMovie;

  database.forEach((movie, index) => {
    if (movie.id === id) {
      database.splice(index, 1);
    }
  })

  // This is for sending raw data
  // res.json({ message: 'movie has been deleted!' });

  // This is to redirect the user to another view
  res.redirect('/movies')
})


/**
 * LISTEN METHOD
 */
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
