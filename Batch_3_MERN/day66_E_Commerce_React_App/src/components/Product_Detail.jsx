import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data";

const Product_Detail = () => {
  // console.log(useParams())
  const { id } = useParams();
  const singleProduct = items.filter((data) => data.id == id);
  console.log(singleProduct[0]);
  return (
    <div className="d-flex justify-content-around align-items-center my-5">
      <div className="img">
        <img
          src={singleProduct[0].imgSrc}
          alt=""
          style={{
            width: "300px",
            border: "2px solid blue",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="desc text-center">
        <h1>{singleProduct[0].title}</h1> <p>{singleProduct[0].description}</p>
        <button className="btn btn-danger mx-3">Buy Now</button>
        <button className="btn btn-warning">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product_Detail;
