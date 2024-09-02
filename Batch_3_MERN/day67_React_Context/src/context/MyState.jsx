import React, { useState } from "react";
import MyContext from "./MyContext";

const MyState = (props) => {
  const data = "Bill Gates";
  const money = 1000;
  const name = "aryan";
  const product = [{ id: 1, title: "iphone", price: 5000 }];
  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider
      value={{ data, money, name, product, counter, setCounter }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
