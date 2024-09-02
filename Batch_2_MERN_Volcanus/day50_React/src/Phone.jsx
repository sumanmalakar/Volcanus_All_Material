import React from "react";

const Phone = () => {
  let phone = {
    name: "Oneplus",
    price: 40000,
    Ram: "6GB",
    ROM: "128GB",
  };
  return (
    <>
    <div className="container">
      <h1>This data is coming from Phone Component</h1>
      <h3>{phone.name}</h3>
      <h3>{phone.price}</h3>
      <h3>{phone.Ram}</h3>
      <h3>{phone.ROM}</h3>
    </div>
    </>
  );
};

export default Phone;
