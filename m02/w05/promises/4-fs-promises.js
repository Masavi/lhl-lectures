// File System using Promises
const fs = require('fs');

fs.promises.readFile('./message.txt', { encoding: 'utf-8' })
  .then((data) => {
    console.log('Read succesful!');
    const newData = data + " im inside promise!!";
    return fs.promises.writeFile('./copy.txt', newData);
  })
  .then(() => {
    console.log('Write successful!');
    return fs.promises.readFile('./copy.txt', { encoding: 'utf-8'})
  })
  .then((finalText) => {
    console.log('This is the copied text:', finalText);
  })
  .catch((error) => {
    console.log('There was an error');
    console.log(error);
  });