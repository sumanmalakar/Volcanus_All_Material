import React from "react";

const Courses = ({courseName,price,duration,discount,code}) => {
  
  return (
    <div>
      <ul>
        <li>{courseName}</li>
        <li>{price}</li>
        <li>{duration}</li>
        <li>{discount}</li>
        <li>{code}</li>
      </ul>
    </div>
  );
};

export default Courses;
