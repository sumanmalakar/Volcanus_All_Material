import React, { useState } from "react";
import { data } from "./data";   i]'
'

const App = () => {
  const [images, setImages] = useState(data);

  const filterbyCategory = (cat) => {
    const result = data.filter((d) => d.category == cat);
    setImages(result);
    console.log("image result = ", result);
  };
  return (
    <>
      <button onClick={() => filterbyCategory("london")}>London</button>
      <button onClick={() => filterbyCategory("paris")}>Paris</button>
      <button onClick={() => filterbyCategory("mumbai")}>Mumbai</button>
      <button onClick={() => filterbyCategory("tokyo")}>Tokyo</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {images.map((d) => (
          <div
            key={d.id}
            style={{
              padding: "20px",
            }}
          >
            <img
              src={d.imgsrc}
              alt=""
              style={{
                border: "2px solid yellow",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
