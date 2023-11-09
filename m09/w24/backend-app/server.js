// Server API
const PORT = 8080;
const express = require('express');
const app = express();
const uniqid = require('uniqid');
const cors = require('cors');

const { createToken } = require('./utils');
const { verifyToken } = require('./middlewares');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const data = [
    { id: uniqid(), breed: 'Beagle', image_url: 'https://images.dog.ceo/breeds/beagle/n02088364_2652.jpg' },
    { id: uniqid(), breed: 'Chihuahua', image_url: 'https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg' },
    { id: uniqid(), breed: 'Maltese', image_url: 'https://images.dog.ceo/breeds/maltese/n02085936_1549.jpg' },
    { id: uniqid(), breed: 'Dachshund', image_url: 'https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg' },
];

const users = [
  { id: uniqid(), email: 'test@email.com', password: 'abc123' },
];

app.get("/", (req, res) => {
  res.send('Hello, world!');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(item => item.email === email);
  if (!user) return res.status(404).json({ message: 'User does not exists' });
  if (user.password !== password) return res.status(400).json({ message: 'Invalid credentials' });
  const token = createToken(user);
  return res.status(200).json({ message: 'Login successful!', token: token });
});

app.get("/dogs", verifyToken, (req, res) => {
    res.json(data);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));