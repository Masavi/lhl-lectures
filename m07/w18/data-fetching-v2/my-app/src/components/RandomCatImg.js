import { useState, useEffect } from 'react';
import axios from 'axios';
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

function RandomCatImg() {
  const [catImgUrl, setCatImgUrl] = useState(null);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    axios.get(CAT_API_URL)
      .then((response) => {
        const url = response.data[0].url;
        setCatImgUrl(url);
      })
      .catch((error) => {
        console.log('❌ Error:', error);
      })
  }, [fetch])

  return (
    <>
      <h2>Random Cat Image 🐱</h2>
      {
        catImgUrl
          ? <img src={catImgUrl} alt="random cat" />
          : <p>Loading cat image...</p>
      }

      <button onClick={() => setFetch(!fetch)}>
        Fetch new image!
      </button>
    </>
  );
}

export default RandomCatImg;