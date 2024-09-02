import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    document.title = counter;
    console.log("UseEffect is running...!");

  }, [counter]); // dependency array

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
    </div>
  );
};

export default App;
