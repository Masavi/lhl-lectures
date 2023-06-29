const express = require('express');
const cookieSession = require('cookie-session');

const app = express();

const cookieSessionConfig = cookieSession({
  name: 'myCookieSession',
  keys: ['my-secret-word'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours,
});

app.use(cookieSessionConfig);

app.get('/', (req, res) => {
  req.session.email = 'maui@gmail.com';
  req.session.views = (req.session.views || 0) + 1;

  res.end(req.session.views + ' views, ' + ' email: ' + req.session.email);
})

app.listen(5555, () => console.log('Listening on 5555...'));
