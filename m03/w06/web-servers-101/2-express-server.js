/**
 * IMPORTS AND CONFIG
 */
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

/**
 * MIDDLEWARES
 * add extra behaviour on ANY INCOMING REQUEST
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

// Most basic middleware, custom made
app.use((req, res, next) => {
  console.log('INCOMING REQUEST');
  req.myOwnProperty = "something i want";
  next();
})

/**
 * ROUTES
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('You are in the about page!')
})

app.post('/signup', (req, res) => {
  console.log('This is the body of the request ->', req.body)

  // This is because of the express middleware
  console.log(req.body.email);
  console.log(req.body.password);
  res.send('You are in the SIGNUP page!')
})

/**
 * LISTEN
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})