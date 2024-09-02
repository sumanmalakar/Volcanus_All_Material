import React from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";

const ProductDetails = () => {
  //   console.log(useParams());
  // with help of useParams hook we can take the dynamic route value from url
  const { id } = useParams();
  const ProductDetail = items.filter((data) => data.id == id);

  // console.log("This is product detail",ProductDetail[0])

  return (
    <div>
      <div className="container text-center">
        <img src={ProductDetail[0].imgSrc} alt="" style={{ width: "250px" }} />
        <h2>{ProductDetail[0].title}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
