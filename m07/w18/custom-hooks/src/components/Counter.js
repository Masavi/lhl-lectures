import useCounter from "../hooks/useCounter";

const Counter = () => {
  const [count, decrease, increase] = useCounter();
  // const [count2, decrease2, increase2] = useCounter();

  const style = {
    backgroundColor: 'gray',
    color: 'white',
    padding: '14px',
  };


  return (
    <>
      <article style={style}>
        <h2>Counter Component</h2>
        <button
          onClick={decrease}
          style={{ marginRight: '10px' }}>
            Decrease
        </button>
        <span>{count}</span>
        <button
          onClick={increase}
          style={{ marginLeft: '10px' }}>
        Increase
        </button>
      </article>

      {/* <article style={style}>
        <h2>Counter Component</h2>
        <button
          onClick={decrease2}
          style={{ marginRight: '10px' }}>
            Decrease 2
        </button>
        <span>{count2}</span>
        <button
          onClick={increase2}
          style={{ marginLeft: '10px' }}>
        Increase 2
        </button>
      </article> */}
    </>
  )
}

export default Counter;
