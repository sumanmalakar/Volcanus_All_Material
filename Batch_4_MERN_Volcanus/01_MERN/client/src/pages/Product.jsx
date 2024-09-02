import React from "react";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const { data, Products } = useContext(ProductContext);
  console.log("first")
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        textAlign: "center",
        marginTop: "15px",
      }}
    >
      {Products.map((data) => (
        <div
          key={data._id}
          style={{ maxWidth: "260px", height: "350px", padding: "10px" }}
        >
          <Link to={`/product/${data._id}`}>
            <img
              src={data.img}
              alt=""
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "10px",
                border: "2px solid blue",
              }}
            />
          </Link>
          <div className="m-2">
            <h5>{data.title}</h5>
            <p>{data.price} ₹</p>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default Product;
