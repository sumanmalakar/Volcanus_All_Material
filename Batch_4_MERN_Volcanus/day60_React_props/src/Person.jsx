import React from "react";

const Person = ({name,email,age}) => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "80%",
        margin: "auto",
        border: "1px solid yellow",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h5>{age}</h5>
    </div>
  );
};

export default Person;
