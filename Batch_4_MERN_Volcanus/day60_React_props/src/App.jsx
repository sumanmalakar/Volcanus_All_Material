import Person from "./Person";
import Product from "./Product";
import { useState } from "react";

const App = () => {

const [counter, setCounter] = useState(0)

  const increase = () =>{
    // counter++;
    console.log(counter)
  }

  // hooks

  const decrease = () =>{
    // counter--;
    console.log(counter)
  }

  return (
    <>
      <h1>counter = {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

export default App;
