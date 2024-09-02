import React from "react";
import { useParams } from "react-router-dom";
import { arr } from "../data";

const Product_Detail = () => {
  // console.log(useParams())
  const { id } = useParams();
  
  const filteredData = arr.filter((data) => data.id == id);
  console.log("Filtered data = ", filteredData);

  return (
    <div style={{ textAlign: "center" , marginTop:'2rem'}}>
      <img
        src={filteredData[0].img}
        alt=""
        style={{
          width: "250px",
          border: "2px solid blue",
          borderRadius: "10px",
        }}
      />
      <h1>{filteredData[0].title}</h1>
      <p>{filteredData[0].description}</p>
    </div>
  );
};

export default Product_Detail;
