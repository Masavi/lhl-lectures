// Server API
const PORT = 8080;
const express = require('express');
const app = express();   // npm i express
const cors = require('cors');       // npm i cors
const uniqid = require('uniqid');   // npm i uniqid
const morgan = require('morgan');   // npm i morgan

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


const data = [
    { id: uniqid(), breed: 'Beagle', image_url: 'https://images.dog.ceo/breeds/beagle/n02088364_2652.jpg' },
    { id: uniqid(), breed: 'Chihuahua', image_url: 'https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg' },
    { id: uniqid(), breed: 'Maltese', image_url: 'https://images.dog.ceo/breeds/maltese/n02085936_1549.jpg' },
    { id: uniqid(), breed: 'Dachshund', image_url: 'https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg' },
];


app.get("/dogs", (req, res) => {
    res.json(data);
})

app.get("/dogs/:id", (req, res) => {
  const id = req.params.id;
  const foundDog = data.find(dog => dog.id === id);
  if (!foundDog) return res.status(404).json({ message: `Dog with id ${req.params.id} not found` });
  return res.status(200).json(foundDog);
});

app.post("/dogs", (req, res) => {
  const { breed, image_url } = req.body;
  if (!breed || !image_url) {
    return res.status(400).json({ message: 'You need to provide breed and image_url to add a new dog' });
  }

  const newDog = { id: uniqid(), breed, image_url }
  data.push(newDog);
  res.status(201).json(newDog);
});

app.delete("/dogs/:id", (req, res) => {
  const id = req.params.id;
  const foundDog = data.find(dog => dog.id === id);
  if (!foundDog) return res.status(404).json({ message: `Dog with id ${req.params.id} not found` });
  // Simulate deletion, has to be handled on frontend app
  return res.status(204).send();
});


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));