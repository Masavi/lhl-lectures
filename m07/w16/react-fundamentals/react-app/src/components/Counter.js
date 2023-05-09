import { useState } from 'react';

const Counter = (props) => {
  const [counter, setCounter] = useState(props.counter || 0);

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h3>{props.title} Counter</h3>
      <button onClick={decreaseCounter}>
        Decrease
      </button>
      <span>{counter}</span>
      <button onClick={increaseCounter}>
        Increase
      </button>
    </>
  )
}

export default Counter;