const fs = require('fs');

console.log('Starting FS program...');

fs.readFile(
  './story.txt',
  { encoding: 'utf8' },
  (error, data) => {
  console.log('Finished reading file!');
  console.log(data);

    fs.writeFile('./copy.txt', data, () => {
      console.log('Finished copying data into copy.txt!');
    })
  }
)

fs.writeFile('./newFile.txt', 'this is the content of the new file', () => {
  console.log('- WROTE NEW FILE -');
})

console.log('FS program has finished...');
