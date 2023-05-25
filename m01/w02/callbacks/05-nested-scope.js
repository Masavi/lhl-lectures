// GLOBAL SCOPE
const answerToTheUniverse = 42;

const first = () => {
  // LOCAL SCOPE
  const beer = 'Corona';
  console.log('first', answerToTheUniverse);
  console.log('isHungry?', isHungry);

  const second = () => {
    const isHungry = true;
    console.log('second');

    const third = () => {
      console.log('third');

      const fourth = () => {
        console.log('fourth', answerToTheUniverse, beer);
      }
      fourth();
    }
    third();
  }
  second();
}

first();

// console.log(beer);