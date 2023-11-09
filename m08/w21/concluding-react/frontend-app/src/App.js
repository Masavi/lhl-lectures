import { useState, useEffect } from 'react';
import axios from 'axios';
import DogList from './components/DogList';
import DogForm from './components/DogForm';
import './App.css';

function App() {
  const [showDogs, setShowDogs] = useState(true);
  const [dogsData, setDogsData] = useState([]);

  const addDogToState = (newDog) => {
    // This would mutate the original array and REACT WOULD'T KNOW THAT I HAS TO RE-RENDER
    // dogsData.push(newDog);
    // This doesn't mutate data and is letting REACT KNOW THAT I HAS TO RE-RENDER
    setDogsData([ ...dogsData, newDog ]);
  }

  useEffect(() => {
    axios.get('http://localhost:8080/dogs')
      .then(response => setDogsData(response.data))
      .catch(error => console.log(error));
  }, [])

  const handleViews = () => {
    setShowDogs(!showDogs);
  }

  return (
    <div className="App">
      <h1>Concluding React 🥂</h1>
      <button onClick={handleViews}>Switch Views</button>

      { showDogs && <DogList dogs={dogsData} /> }
      { !showDogs && <DogForm addDog={addDogToState} /> }
    </div>
  );
}

export default App;
