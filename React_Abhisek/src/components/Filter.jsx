import React, { useState } from "react";
import { ProductData } from "./data.js";

const Filter = () => {
  const [products, setProducts] = useState(ProductData);

  const filterbyCategory = (cat) =>{
    // setProducts
   const filteredData =  ProductData.filter((items)=>items.category === cat)
   console.log(filteredData)

   setProducts(filteredData)
  }

  const filterbyPrice = (price) =>{
    setProducts(ProductData.filter((items)=>items.price >= price))
  }


  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => filterbyCategory("mobiles")}>Mobiles</button>
        <button onClick={() => filterbyCategory("laptops")}>Laptops</button>
        <button onClick={() => filterbyCategory("tablets")}>Tablets</button>
        <button onClick={() => filterbyPrice(700)}>{">"}700</button>
        <button onClick={() => filterbyPrice(800)}>{">"}800</button>
        <button onClick={() => filterbyPrice(1000)}>{">"}900</button>
      </div>
      <div>
        {products.map((data) => (
          <div key={data.title}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <img src={data.imgsrc} alt="" />
            <h3 style={{ backgroundColor: "blue" }}> {data.category}</h3>
            <h1>{data.price}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
