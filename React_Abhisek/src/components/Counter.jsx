import React, { useState } from "react";

const Counter = () => {
  
    const [counter,setCounter] = useState(0);

  const inc = () => {
    // counter++;
    setCounter(counter+1)
    console.log(counter);
  };
  const dec = () => {
    // counter--;
    setCounter(counter-1)
    console.log(counter);
  };
  return (
    <>
      <h1>SuperManCounter = {counter}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  );
};

export default Counter;
