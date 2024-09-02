import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";

const Product_Detail = () => {
  // console.log(useParams());
  const { id } = useParams();

  const [data, setData] = useState([]);

  // console.log(product);

  useEffect(() => {
    const product = products.filter((data) => data.id == id);

    setData(product[0]);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <img src={data.imgSrc} alt="" style={{ width: "250px" }} />
    </div>
  );
};

export default Product_Detail;
