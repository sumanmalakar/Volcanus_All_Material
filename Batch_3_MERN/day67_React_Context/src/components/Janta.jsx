import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const Janta = () => {
  // console.log(useContext(MyContext))
  const { data, money, name, product, counter, setCounter } =
    useContext(MyContext);

  return (
    <>
      <h1>Janta = {data}</h1>
      <h2>Money = {money}</h2>
      <h1>Name = {name}</h1>
      <h3>product = {product[0].title}</h3>
      <h3>product = {product[0].price}</h3>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
};

export default Janta;
