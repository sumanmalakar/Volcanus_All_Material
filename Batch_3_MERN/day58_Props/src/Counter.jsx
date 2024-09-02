import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);

  const increase = () => {
    setCounter(counter + 1);

    // counter++;
    // document.querySelector('h1').innerText = counter;
    console.log(counter);
  };
  const decrease = () => {
    setCounter(counter - 1);

    // counter--;
    // document.querySelector('h1').innerText = counter;
    console.log(counter);
  };

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={increase}>Increase by 1</button>
      <button onClick={decrease}>Decrease by 1</button>
    </div>
  );
};

export default Counter;
