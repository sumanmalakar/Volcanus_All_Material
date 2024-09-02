import React from "react";

const Person = () => {
  const Name = "superman";
  const person = {
    name: "batman",
    age: 30,
    salary: "$1.2 B",
    img: "https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510027_640.png",
  };
  const { name, age, salary, img } = person;

  // Internal CSS
  const myStyle = {
    backgroundColor: "red",
    padding: "10px",
  };

  return (
    <div
      className="main"
      style={{
        backgroundColor: "blue",
        color:'yellow'
      }}
      // style={myStyle}
    >
      <h1>
        App {21 % 5} {Name}
      </h1>
      <li> {name}</li>
      <li> {age}</li>
      <li> {salary}</li>
      <img src={img} alt="" />
    </div>
  );
};

export default Person;
