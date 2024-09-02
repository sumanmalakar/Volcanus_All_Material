import React from "react";
import { items } from "../data.js";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
    <div style={{textAlign:'center'}}>

      {items.map((data) => (
        <Link to={`/product/${data.id}`} key={data.id} style={{textDecoration:'none',color:'white'}}>
          <img src={data.imgSrc} alt="" style={{width:'250px'}} />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Product;
