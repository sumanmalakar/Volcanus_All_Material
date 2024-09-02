import React from "react";

const Phone = ({
  name,
  ram,
  price,
  dark,
  light,
  counter,
  increase,
  decrease,
}) => {
  return (
    <>
      <h1>Counter = {counter} </h1>
      <h1>{name}</h1>
      <h1>{ram}</h1>
      <h1>{price}</h1>
      <button onClick={dark}>DarkMode</button>
      <button onClick={light}>LightMode</button>
      <button onClick={increase}>increaseBy1</button>
      <button onClick={decrease}>decreaseBy1</button>
    </>
  );
};

export default Phone;
