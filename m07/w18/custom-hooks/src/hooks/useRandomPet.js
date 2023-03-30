import useAxios from "./useAxios";

// Cat API: 'https://cataas.com/cat?json=true'
// Dog API: 'https://place.dog/500/400

const useRandomPet = (pet, url) => {
  const [data] = useAxios(url);

  if (pet === 'cat') {
    const catUrl = data ? `https://cataas.com${data.url}` : null;
    return [catUrl];
  }

  if (pet === 'dog') {
    const dogUrl = data ? data.message : null;
    return [dogUrl];
  }

  return [''];
}

export default useRandomPet;
