// File System Library
const fs = require('fs');

fs.readFile('./message.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) throw new Error('An error occurred when reading file! :(');
  console.log('Read succesful!');
  const newData = data + " this is the aditional text string 🎁";

  fs.writeFile('./copy.txt', newData, (error, result) => {
    if (error) throw new Error('An error occurred when copying file! :(');
    console.log('Write succesful!');
    console.log('Result from write:', result);

    fs.readFile('./copy.txt', { encoding: 'utf-8'}, (error, text) => {
      if (error) throw new Error('An error occurred when reading the new file!');
      console.log('This is the copied text:', text);
    })
  });
});

