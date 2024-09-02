import React from "react";
import Person from "./Person";
import Counter from "./Counter";

const App = () => {
  const ChangeDark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };
  const ChangeLight = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  };

  return (
    <>
      <div>
        {/* <h1>Events = 0 </h1> */}

        {/* <Person
          name={"superman"}
          age="18"
          salary="100"
          height="6.5"
          weight="102"
        />
        <Person name={"aditiya"} age="28" salary="100000" />
        <Person name={"aditi"} age="21" salary="90000000" /> */}
        {/* <button onClick={ChangeDark}>ChangeDark</button>
        <button onMouseOver={ChangeLight}>ChangeLight</button> */}
        <Counter />
      </div>
    </>
  );
};

export default App;
