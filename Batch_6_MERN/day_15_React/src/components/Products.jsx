import React from "react";
import { Link } from "react-router-dom";
import { items } from "./data";

const Products = () => {
  return (
    <div
      style={{
        width: "1000px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      {items.map((data) => (
        <div key={data.id}>
          <Link to={`/products/${data.title}`}>
            <img
              src={data.imgSrc}
              alt=""
              style={{
                width: "200px",
                borderRadius: "10px",
                border: "2px solid blue",
              }}
            />
          </Link>
          <h4>{data.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Products;
