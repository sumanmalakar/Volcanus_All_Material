import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";

const Product_Detail = () => {
  //   console.log(useParams());
  const { id } = useParams();

  const singleProduct = items.filter((data) => data.id == id);

  console.log(singleProduct[0]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{singleProduct[0].title}</h1>
      <p>{singleProduct[0].description}</p>
      <img src={singleProduct[0].imgSrc} alt="" style={{ width: "250px" }} />
      <h2>{singleProduct[0].price} ₹</h2>
    </div>
  );
};

export default Product_Detail;
