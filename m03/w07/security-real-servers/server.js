const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser'); 

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////////////////////////////////////////////////

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////////////////////////////////////

// set up middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Database
/////////////////////////////////////////////////////////////////////////////////////////////////////

const languages = require('./languages.json');

// users object
const users = {
  abc: {
    id: 'abc',
    email: 'maui@gmail.com',
    password: 'popcorn'
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////////////////////////

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  console.log('req.body', req.body);
  const email = req.body.email;
  const password = req.body.password;

  // did they give us an email and a password
  if (!email || !password) {
    return res.status(400).send('please provide an email and a password');
  }

  // find the user by their email address
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we NOT find someone?
  if (!foundUser) {
    return res.status(404).send('no user with that email found');
  }

  // happy path! the user is who they say they are!
  // set the cookie
  res.cookie('userId', foundUser.id);

  // redirect the user
  res.redirect('/protected');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // pull the email and password off the body object
  const email = req.body.email;
  const password = req.body.password;

  // check if email or password is undefined (the client didn't provide a value)
  if (!email || !password) {
    return res.status(400).send('please provide an email and a password');
  }

  // create a random id
  const id = Math.random().toString(36).substring(2, 5);

  // create a new user object
  const user = {
    id: id,
    email: email,
    password: password // Store our hashed password instead of our plain text!
  };

  // add the new user object to `users`
  users[id] = user;

  console.log('Updated Users after Register:', users);

  // redirect the client to the login page
  res.redirect('/login');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the user's cookie
  res.clearCookie('userId');

  // send the user somewhere
  res.redirect('/login');
});

// GET /about
app.get('/about', (req, res) => {
  const languagePref = req.session.language;

  const templateVars = {
    heading: languages.aboutHeadings[languagePref],
    body: languages.aboutBodies[languagePref]
  };

  res.render('about', templateVars);
});

// GET /languages/:languagePref
app.get('/languages/:languagePref', (req, res) => {
  // retrieve the user's preference from the url parameter
  const languagePref = req.params.languagePref;

  // set a cookie in the user's browser based off their language preference
  res.cookie('language', languagePref);

  // redirect the user to the homepage
  res.redirect('/home');
});

// GET /home
app.get('/home', (req, res) => {
  const languagePref = req.cookies.language;

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };

  res.render('home', templateVars);
});

// GET /protected
app.get('/protected', (req, res) => {
  // retrieve the user's cookie
  const userId = req.cookies.userId;

  // check if the user is logged in
  if (!userId) {
    return res.status(401).send('you are not allowed to be here');
  }

  // retrieve the user's information from the `users` object
  const user = users[userId];

  const templateVars = {
    email: user.email,
    name: req.session.name,
  };

  res.render('protected', templateVars);
});


/////////////////////////////////////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////////////////////////////////////

// start the server up
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
