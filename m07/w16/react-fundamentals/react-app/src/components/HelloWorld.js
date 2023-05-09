import world from '../assets/world.png';
import '../index.css';

function HelloWorld() {
  return (
    <>
      <p>This is the hello world component</p>
      <img
        className="world-img"
        src={world}
        alt="hello, world" />
    </>
  )
}

export default HelloWorld;
