import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product_Detail = () => {
  const { url } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProductById = async (id) => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log("Fetching Product By Id ", api.data.product);
      setProduct(api.data.product);
    };
    fetchProductById(id);
  }, [id]);

  return (
    <div>
      <div className="container my-5 d-flex justify-content-around align-items-center">
        <div className="img">
          <img
            src={product.imgsrc}
            alt=""
            style={{
              width: "250px",
              height: "250px",
              border: "2px solid yellow",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="des text-center">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>
            {product.price} {"₹"}
          </h3>
          <div className="my-3">
            <button className="btn btn-warning mx-3">Add To Cart</button>
            <button className="btn btn-danger mx-3">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
