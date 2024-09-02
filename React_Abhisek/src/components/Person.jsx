import React from "react";

const Person = ({name,img}) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="" />
    
    </div>
  );
};

export default Person;
