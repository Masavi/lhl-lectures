const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files via public directory (CSS, images, etc.)
app.use(express.urlencoded({ extended: true })); // Parses body of form request string as object.

app.set('view engine', 'ejs'); // Use EJS as our template engine.

// Home page.
app.get('/', (req, res) => {
  res.render('index');
});

// Listen for requests
app.listen(PORT, () => console.log(`Express server running on port: ${PORT}`));