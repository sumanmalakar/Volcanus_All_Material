import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "I phone - 14",
      price: 140000,
      img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra",
      price: 560000,
      img: "https://m.media-amazon.com/images/I/61-E0V81kBL._AC_UY218_.jpg",
    },
    {
      id: 3,
      title: "Mi - 14",
      price: 130000,
      img: "https://m.media-amazon.com/images/I/71MsYJjQhBL._AC_UY218_.jpg",
    },
  ];
  return (
    <div>
      {products.map((data) => (
        <div key={data.id} style={{ textAlign: "center" }}>
          <div>
            {/* <img src={data.img} alt="" style={{ width: "250px" }} /> */}
          </div>
          <h3>{data.title}</h3>
          <h4>{data.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default Product;
