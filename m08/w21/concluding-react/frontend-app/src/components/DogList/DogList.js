import DogCard from '../DogCard';

const DogList = ({ dogs = [] }) => {
  return (
    <>
      <h2>DogList</h2>
      {
        dogs.map(dog => (
          <DogCard
            key={dog.id}
            id={dog.id}
            breed={dog.breed}
            image_url={dog.image_url} />
        ))
      }
    </>
  );
}

export default DogList;