import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const decreaseCounter = () => {
    setCounter((prev) => prev - 1);
  }

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  }

  return [counter, decreaseCounter, increaseCounter];
}

export default useCounter;