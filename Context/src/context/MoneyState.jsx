import React, { useState } from "react";
import MoneyContext from "./MoneyContex";

const MoneyState = (props) => {
  const myMoney = 9000;
  const [counter, setCounter] = useState(100);

  return (
    <MoneyContext.Provider value={{ myMoney, counter, setCounter, data: 10 }}>
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
