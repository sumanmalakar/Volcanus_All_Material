import React from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 9999;
  const hero = "superman";
  const product = { title: "iphone", price: 890000 };
  const name = "rohan";
  return (
    <MoneyContext.Provider value={{ money, hero, product, name }}>
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
