import useRandomPet from '../hooks/useRandomPet';

import '../styles/pet.css';

const Pet = () => {
  const [randomCat] = useRandomPet('cat', 'https://cataas.com/cat?json=true');
  const [randomDog] = useRandomPet('dog', 'https://dog.ceo/api/breeds/image/random');

  return (
    <>
      <h3>Look at my pets!</h3>
      {
        randomCat
          ? (<>
              <h3>Random Cat</h3>
              <img
                className="img-pet"
                src={randomCat}
                alt="cool doggo" />
            </>)
          : (<span>Loading random cat...</span>)
      }

      {
        randomDog
          ? (<>
              <h3>Random Doggo</h3>
              <img
                className="img-pet"
                src={randomDog}
                alt="cool doggo" />
            </>)
          : (<span>Loading random dog...</span>)
      }
    </>
  );
}

export default Pet;