const $button = $('#characters-load');
const $ul = $('#characters-list');

$button.click(() => {
  const DISNEY_CHARACTERS_ENDPOINT = 'https://api.disneyapi.dev/characters';
  $.ajax({
    url: DISNEY_CHARACTERS_ENDPOINT,
    success: (response) => {
      const charactersArray = response.data;

      for (const character of charactersArray) {
        console.log(character.name);
        $ul.append(`
          <li>
            <h3>${character.name}</h3>
            <img src="${character.imageUrl}" alt="character image">
          </li>
        `)
      }
    },
    error: (err) => {
      console.log(err);
      $ul.append('An error occurred...');
    }
  })
})