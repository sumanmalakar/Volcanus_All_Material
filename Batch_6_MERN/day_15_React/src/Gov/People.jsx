import React from "react";
import MoneyContext from "../context/MoneyContext";
import { useContext } from "react";

const People = () => {
  // console.log(useContext(MoneyContext))
  const data = useContext(MoneyContext);

  return (
    <div>
      <h1>This is People Component </h1>
      <h3>Total Money = {data.money} </h3>
      <h3>Hero = {data.hero}</h3>
      <h1>Name = {data.name}</h1>
    </div>
  );
};

export default People;
