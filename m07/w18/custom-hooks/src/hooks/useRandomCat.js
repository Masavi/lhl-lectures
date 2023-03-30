import useAxios from "./useAxios";

const useRandomCat = () => {
  const [data] = useAxios('https://cataas.com/cat?json=true');
  const catUrl = data ? `https://cataas.com${data.url}` : null;

  return [catUrl];
}

export default useRandomCat;
