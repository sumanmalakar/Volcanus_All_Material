import React from "react";

const Person = ({ name, age, salary, height, weight }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          margin: "20px",
          color: "black",
          borderRadius: "10px",
        }}
      >
        <h4>Name :- {name}</h4>
        <h4>Age :- {age}</h4>
        <h4>Salary :- {salary}</h4>
        {height ? <h4>Height :- {height}</h4> : " "}

        {weight && <h4>Weight :- {weight}</h4>}
        
      </div>
    </>
  );
};

export default Person;
