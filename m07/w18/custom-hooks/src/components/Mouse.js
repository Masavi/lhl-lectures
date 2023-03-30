import useMouseMove from "../hooks/useMouseMove";

const Mouse = () => {
  const [x, y] = useMouseMove();

  return (
    <>
      <h2>Mouse Coordenates</h2>
      <h3>X: {x} Y: {y} </h3>
    </>
  );
}

export default Mouse;