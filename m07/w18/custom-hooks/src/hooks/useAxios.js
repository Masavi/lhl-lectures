import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {

    axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        alert('Error fetching data!!! 😢');
      })

  }, [url])

  return [data];
}

export default useAxios;