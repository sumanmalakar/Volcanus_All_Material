import React from "react";
import { products } from "../data";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      {products.map((data) => (
        <div key={data.id} style={{ textAlign: "center" }}>
          <Link to={`/product/${data.id}`}>
            <img src={data.imgSrc} alt="" style={{ width: "250px" }} />
          </Link>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <h3>{data.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
