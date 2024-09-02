import React, { useContext } from "react";
import MoneyContext from "../context/MoneyContext";

const People = () => {
  // console.log(useContext(MoneyContext))
  const data = useContext(MoneyContext);
  return (
    <div>
      <h1>This is people </h1>
      <h1>Money = {data.money}</h1>
      <h1>Bank Balance = {data.bankBalace}</h1>
      <h1>Counter = {data.counter}</h1>
      <button onClick={() => data.setCounter(data.counter + 1)}>
        Increase by 1
      </button>
    </div>
  );
};

export default People;
