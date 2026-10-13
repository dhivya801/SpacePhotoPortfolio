import { useState } from 'react';

const ArrowFunction = () => {
  console.log("This is arrow function");

  const [value, setValue] = useState(0);

  function Increment() {
    setValue(value + 1);
  }

  return (
    <>
      <h1>Arrow Function</h1>

      <h2>{value}</h2>

      <button onClick={Increment}>Increment</button>

      <button onClick={() => setValue(value - 1)}>
        Decrement
      </button>
    </>
  );
};

export default ArrowFunction;