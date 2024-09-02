import Phone from "./components/Phone";
import { useState } from "react";
import Products from "./components/Products";
const App = () => {
  // const laptop = {
  //   name: "hp probook 430 g2",
  //   price: 450000,
  //   processor: "Intel i5 6th gen",

  // state variable

  const [counter,setCounter] = useState(10)

  const light = () => {
    console.log("btn is cliked");
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("body").style.color = "black";
  };
  const dark = () => {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  };

  // setCounter("batman")

  const increaseBy1 = () => {
    console.log("Before Increase Counter = ", counter);
    // counter = counter +1
    // counter++;
    setCounter(counter+1)
    console.log("After Increase Counter = ", counter);
  };

  const decreaseBy1 = () => {
    console.log("Before Decrease Counter = ", counter);
    // counter = counter -1
    // counter--;
    setCounter(counter-1)
    console.log("After Decrease Counter = ", counter);
  };

// hooks 
// useState(), useEffect(), useMemo(), useReducer(), useContext, useCollback, useLayoutEffect, 

  return (
    <>
    {/* <button onClick={()=>setCounter(counter+1)}>Incrase</button>
    <button onClick={()=>setCounter(counter-1)}>Decrease</button>
      <Phone
        ram={"100gb"}
        name={"pocco"}
        price={"5000"}
        light={light}
        dark={dark}
        counter={counter}
        increase={increaseBy1}
        decrease={decreaseBy1}
      /> */}

      <Products />
    </>
  );
};

export default App;
