import { useState,useEffect } from "react";

const Use_Effect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    document.title = counter
    console.log("UseEffect is running")
  },[counter])

 
  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
};

export default Use_Effect;
