$( document ).ready(function() {
  const $button = $('button');
  const $title = $('h1');
  const $form = $('#basic-form');

  $button.on('click', () => {
    $title.text("new value!");
  })

  $title.on('mouseenter', () => {
    $title.css('color', 'blue');
  })

  $form.on('submit', (event) => {
    event.preventDefault();

    const value = $('input').val();
    console.log(value);
  })
});

