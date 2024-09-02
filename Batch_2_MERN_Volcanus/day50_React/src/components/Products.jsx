import React, { useState } from "react";
import { items } from "./Data";

const Products = () => {
  const [products, setProducts] = useState(items);
  return (
    <>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ width: "67rem", margin: "auto" }}
      >
        {products.map((item) => (
          <div className="col-md-4 my-3" key={item.id}>
            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center align-items-center p-3">
                <img
                  src={item.imgSrc}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                    border: "2px solid yellow",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary mx-3">
                  {item.price}
                </a>
                <a href="#" className="btn btn-warning">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
