import { useState } from 'react';
import axios from 'axios';
import './DogForm.css';

const DogForm = ({ addDog }) => {
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDog = {
      breed: breed,
      image_url: imageUrl,
    }

    axios.post('http://localhost:8080/dogs', newDog)
      .then((response) => {
        const responseDog = response.data;
        // This updates the state in App.js
        addDog(responseDog);
        setBreed('');
        setImageUrl('');
        alert('Dog added successfully!')
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h2>Add a new dog!</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Breed</label>
        <input value={breed} onChange={(e) => setBreed(e.target.value)} type="text" for="breed" />

        <label>Image URL</label>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" for="image_url" />

        <button type='submit'>Add dog!</button>
      </form>
    </>
  );
}

export default DogForm;