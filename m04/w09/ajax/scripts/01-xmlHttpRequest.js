const API_ENDPOINT = 'https://api.disneyapi.dev/characters';
const xhttp = new XMLHttpRequest();

const button = document.getElementById('btn-trigger');
const section = document.getElementById('demo');

button.addEventListener('click', () => {
  console.log('Button pressed!');

  xhttp.onload = function () {
    const json = JSON.parse(this.responseText)
    console.log(json);

    section.innerHTML = json.data[0].name;
  }

  xhttp.open('GET', API_ENDPOINT);
  xhttp.send();
})


