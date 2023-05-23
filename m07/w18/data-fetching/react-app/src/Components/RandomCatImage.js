import { useEffect, useState } from 'react';
import axios from 'axios';

const RandomCatImage = () => {
  const CAT_API = 'https://api.thecatapi.com/v1/images/search?limit=1';
  const [catImg, setCatImg] = useState(null);

  useEffect(() => {
    axios.get(CAT_API)
      .then((response) => {
        console.log('AXIOS RESPONSE OBJECT:', response);
        const imgUrl = response.data[0].url;
        setCatImg(imgUrl);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <h2>Random Cat Image 🐱</h2>
      {
        catImg
          ? <img src={catImg} alt="random cat" />
          : <p>Loading...</p>
      }
    </>
  );
}

export default RandomCatImage;