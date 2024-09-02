import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("useEffect is running...")
    document.title = counter;

  }, [counter]); // dependecy array

  return (
    <div>
      <h1>This is useEffect Hook</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default UseEffect;
