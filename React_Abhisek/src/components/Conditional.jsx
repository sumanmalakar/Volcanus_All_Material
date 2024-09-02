import React from "react";

const Conditional = () => {
  let age = 9;
  return <>{age > 18 && <h1>You can drive</h1>}</>;
};

export default Conditional;
