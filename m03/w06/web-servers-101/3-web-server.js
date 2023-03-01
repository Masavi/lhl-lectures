const express = require('express');
const app = express();
const PORT = 5000;

// This stablishes EJS as the view engine to render from
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  // This data could be coming from ANYWHERE
  const templateData = {
    first_name: 'Maui',
    last_name: 'Saavedra'
  }

  res.render('index', templateData)
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
