import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { arr } from "../data";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        width: "600px",
        margin: "auto",
      }}
    >
      <button onClick={() => navigate("/career")}>
        Navigate To Career Page
      </button>

      {arr.map((data) => (
        <Link
          to={`/product/${data.id}`}
          key={data.id}
          style={{
            backgroundColor: "green",
            margin: "10px",
            padding: "10px",
            textDecoration: "none",
            color: "white",
          }}
        >
          <img
            src={data.img}
            alt="alt"
            style={{
              width: "250px",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          />
          <h1>{data.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Product;

// npm i
