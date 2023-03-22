const htmlCollection = document.getElementsByTagName('button')

const button = htmlCollection[0];
const ul = document.getElementById('characters-list');

button.addEventListener('click', () => {
  const DISNEY_CHARACTERS_ENDPOINT = 'https://api.disneyapi.dev/characters';
  fetch(DISNEY_CHARACTERS_ENDPOINT)
    .then((response) => { return response.json() })
    .then((json) => {
      console.log('THIS IS THE JSON:', json);
      const charactersArray = json.data;

      for (const character of charactersArray) {
        console.log(character.name);
        ul.innerHTML += `
          <li>
            <h3>${character.name}</h3>
            <img src="${character.imageUrl}" alt="character image">
          </li>
        `
      }
    })
    .catch((err) => { console.log('There is an error...', err) })
})