import React from "react";
import "./product.css";

const Product = () => {
  const product = {
    title: "Apple Mackbook Pro",
    price: 78000,
    description:
      "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,",
    imgsrc: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
  };
  
  const myStyle = {
    backgroundColor: "blue",
    padding: "10px",
    textAlign: "center",
    margin: "20px",
  };

  return (
    <div
      // style={{
      //   backgroundColor:'blue',
      //   padding:'10px',
      //   textAlign:'center'
      // }}
      style={myStyle}
    >
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <h3>{product.description}</h3>
      <img src={product.imgsrc} alt="" style={{ width: "250px" }} />
    </div>
  );
};

export default Product;
