import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product_Detail = () => {
  const { id } = useParams();
  const url = "http://localhost:1000/api";
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const api = await axios.get(`${url}/products/${id}`);
      //   console.log("api ", api);
      setData(api.data.product[0]);

      // console.log("new data ",data)
    };
    fetchSingleProduct();
  }, [id]);

  return (
    <div className="text-center my-5" style={{height:'100vh'}}>
      <h1>{data.title}</h1>
      <img style={{ width: "250px",margin:'10px' }} src={data.img} alt="" />
      <h3 >{data.price}</h3>
      <div className="my-5">
        <button className="btn btn-danger mx-3">Buy Now</button>
        <button className="btn btn-warning">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product_Detail;
