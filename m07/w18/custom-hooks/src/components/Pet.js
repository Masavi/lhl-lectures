import useRandomCat from '../hooks/useRandomCat';

import '../styles/pet.css';

const Pet = () => {
  const [randomCat] = useRandomCat();

  return (
    <>
      {
        randomCat
          ? (<>
              <h2>Look at my pets!</h2>
              <img
                className="img-pet"
                src={randomCat}
                alt="cool doggo" />
            </>)
          : (<span>Loading random cat...</span>)
      }
    </>
  );
}

export default Pet;