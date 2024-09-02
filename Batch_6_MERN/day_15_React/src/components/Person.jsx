import React from "react";
import './person.css'

const Person = () => {
  const obj = {
    name: "superman",
    email: "superman@gmail.com",
    age: 300,
    salary: 100,
    phone: "+61 9037810",
    img: "https://images.immediate.co.uk/production/volatile/sites/3/2022/12/MCDBAVVEC017-d4ece24.jpg?quality=90&resize=980,654",
  };

  const myStyle = {
    backgroundColor:'red',
    color:'white',
    padding:'10px',
    borderRadius:'10px'
  }

  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "10px",
        borderRadius: "10px",
      }}
    // style={myStyle}

    className="container"
    >
      <h2>This is person component</h2>
      <ul
        style={{
          backgroundColor: "pink",
          padding: "30px",
          borderRadius: "10px",
          border: "2px solid yellow",
          color:'black'
        }}
      >
        <li>{obj.name}</li>
        <li>{obj.email}</li>
        <li>{obj.age}</li>
        <li>{obj.salary}</li>
        <li>{obj.phone}</li>
        <img src={obj.img} alt="" />
      </ul>
    </div>
  );
};

export default Person;
