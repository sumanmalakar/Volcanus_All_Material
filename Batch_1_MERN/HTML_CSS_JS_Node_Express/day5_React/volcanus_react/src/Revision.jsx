import React, { useState } from "react";
import { product } from "./product_Data";

const Revision = () => {
  return (
    <>
      <div className="row">
        {product.map((data) => {
          return (
            <>
              <div className="col-md-4 my-5 text-center">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>

                  <div className="flex">
                    <img className="img_style" src={data.imgUrl} alt="" />
                  </div>
                </div>
                <button className="btn btn-warning my-5">{data.price}</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Revision;
