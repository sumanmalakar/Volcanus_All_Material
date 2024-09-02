import React from "react";
import Central_Government from "./components/Central_Government";

const App = () => {
  const money = "ram"
  return (
    <>
      <h1>This is my App Component</h1>

      <Central_Government money={money} />
      
    </>
  );
};

export default App;
