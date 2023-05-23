import { useState, useEffect } from 'react';

const IntervalTimer = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const idInterval = setInterval(
      () => {
        console.log('setInterval stablished!');
        setTimer(timer + 1);
      },
      1000)

    // useEffect can do "cleanups"
    return () => {
      clearInterval(idInterval);
    }
  }, [timer])

  return (
    <>
      <h2>IntervalTimer Component ⏰</h2>

      <p>Timer: {timer}</p>
    </>
  );
}

export default IntervalTimer;