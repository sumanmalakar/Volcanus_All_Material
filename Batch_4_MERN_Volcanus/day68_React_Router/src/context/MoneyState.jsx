import React, { useState } from "react";
import Moneycontext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 670000;
  const bankBalace = 1000;
  const name = "superman";
  const [counter, setCounter] = useState(0);

  return (
    <Moneycontext.Provider
      value={{ money, bankBalace, name, counter, setCounter }}
    >
      {props.children}
    </Moneycontext.Provider>
  );
};

export default MoneyState;
