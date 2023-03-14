const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.static('public')); // Serve static files via public directory (CSS, images, etc.)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parses body of form request string as object.

app.set('view engine', 'ejs'); // Use EJS as our template engine.

// Simulation of a Database
const usersDatabase = [
  { id: 1, first_name: 'Maui', last_name: 'Saavedra', email: 'maui@gmail.com', password: "123" },
  { id: 2, first_name: 'Luis', last_name: 'Villarreal', email: 'luis@gmail.com', password: "abc" }
]

// Home page.
app.get('/', (req, res) => {
  const idUser = Number(req.cookies.user_id);
  if (!idUser) return res.render('index', { user: false });

  const userObject = usersDatabase.find((user) => user.id === idUser)
  return res.render('index', { user: userObject })
});

// Sing-In
app.post('/sign-in', (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const { email, password } = req.body
  const userObject = usersDatabase.find((user) => user.email === email)
  
  if(!userObject) return res.send('User is not registered :(');
  if(userObject.password !== password) return res.send('Auth error u.u');

  res.cookie('user_id', userObject.id);
  res.redirect('/');
})

// Sign-out
app.post('/sign-out', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/')
})


// Listen for requests
app.listen(PORT, () => console.log(`Express server running on port: ${PORT}`));