import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseBy1,
  descreaseBy1,
  increaseBy10,
  descreaseBy10,
} from "./redux/counterSlice";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  const counter = useSelector((state) => state.Spiderman);
  const dispatch = useDispatch();
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

<Route path="/" element={<Products />} />
<Route path="/cart" element={<Cart />} />
      {/* <div>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increaseBy1())}>IncreaseBy1</button>
      <button onClick={()=>dispatch(descreaseBy1())}>DecreaseBy1</button>
      <button onClick={()=>dispatch(increaseBy10())}>IncreaseBy10</button>
      <button onClick={()=>dispatch(descreaseBy10())}>DecreaseBy10</button>
    </div> */}
      
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
