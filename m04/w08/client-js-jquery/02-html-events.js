const button = document.querySelector("button");
const title = document.querySelector("h1");
const form = document.getElementById("basic-form");

/**
 * EVENTS are interaction with the user,
 * any time a user does SOMETHING in our website,
 * we can handle what to do by LISTENING TO EVENTS
 */

const sayHello = () => {
  alert("Hey there!")
}

button.addEventListener('click', (event) => {
    console.log('Button has been clicked!')
    title.innerText = "Text changed! 🎨"
  }
);

title.addEventListener(
  'mouseenter',
  () => {
    title.style.color = "red";
  }
)

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('it works!!');

  const input = document.querySelector("input");
  console.log(input.value);
})