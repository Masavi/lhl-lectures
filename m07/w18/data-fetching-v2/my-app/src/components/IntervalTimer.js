import { useState, useEffect } from "react";

function IntervalTimer(props) {
  const [timer, setTimer] = useState(0);

  useEffect(
    () => {
      const idInterval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);

      return () => clearInterval(idInterval);
    },
    [timer]
  )

  return (
    <>
      <h2>Interval Component ⌚</h2>
      <p>Timer: {timer}</p>
    </>
  )
}

export default IntervalTimer;
