import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../components/data";

const Product_Detail = () => {
  // console.log(useParams())
  const { id } = useParams();
  const product_detail = items.filter((data) => data.title == id);
//   console.log(product_detail);
  return (
    <div style={{textAlign:'center',marginTop:'20px',padding:"20px"}}>
      <h1>{product_detail[0].title}</h1>
      <img
        src={product_detail[0].imgSrc}
        alt=""
        style={{
          width: "200px",
          borderRadius: "10px",
        //   border: "2px solid blue",
          padding:'30px'
        }}
      />
      <p>{product_detail[0].description}</p>
      <h3>{product_detail[0].price}</h3>
      <h4>{product_detail[0].category}</h4>
    </div>
  );
};

export default Product_Detail;
