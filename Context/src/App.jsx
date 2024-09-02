import React from "react";
import IndianGovt from "./components/IndianGovt";

const App = () => {
  const money = "superman";
  return <>
  <h1>This is App Component</h1>
  <IndianGovt money={money} />
  </>;
};

export default App;
