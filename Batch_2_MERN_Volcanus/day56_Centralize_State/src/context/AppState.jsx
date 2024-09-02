import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppState = (props) => {
  const [data, setData] = useState(10);
  const dollar = 1000000000;
  const person ={
    name:'thor',
    salary:'100000',
    age:200
  }
console.log("data at context ",data)
  return (
    <AppContext.Provider
      value={{
        dollar,
        data,
        setData,
        person
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
