import React from "react";

const Conditional_Rendering = () => {
  const age = 18;
  return (
    <div>
      {age >= 18 ? (
        <>
          <div>
            <h1>You Can Drive</h1>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>You can not Drive</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Conditional_Rendering;
