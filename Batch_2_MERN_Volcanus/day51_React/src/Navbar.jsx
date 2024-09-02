import React from "react";
import { items } from "./Data";
import { Link } from "react-router-dom";
const Navbar = ({ setproducts }) => {
  const filterByCategory = (cat) => {
    const filteredData = items.filter((data) => data.category === cat);
    console.log(filteredData);
    setproducts(filteredData);
  };
  const filterByPrice = (p) =>
    setproducts(items.filter((data) => data.price >= p));

  return (
    <>
      <div className="nav p-3 my-3 d-flex justify-content-center">
        <Link to={"/"} className="btn btn-success mx-3">
          Home
        </Link>
        <div
          className="btn btn-success mx-3"
          onClick={() => setproducts(items)}
        >
          No filter
        </div>
        <div
          className="btn btn-primary mx-3"
          onClick={() => filterByCategory("mobiles")}
        >
          Mobiles
        </div>
        <div
          className="btn btn-warning mx-3"
          onClick={() => filterByCategory("laptops")}
        >
          Laptops
        </div>
        <div
          className="btn btn-secondary mx-3"
          onClick={() => filterByCategory("tablets")}
        >
          Tablets
        </div>
        <div className="btn btn-info mx-3" onClick={() => filterByPrice(30000)}>
          {">"}30000
        </div>
        <div
          className="btn btn-light mx-3"
          onClick={() => filterByPrice(60000)}
        >
          {">"}60000
        </div>
        <div
          className="btn btn-danger mx-3"
          onClick={() => filterByPrice(80000)}
        >
          {">"}80000
        </div>
      </div>
    </>
  );
};

export default Navbar;
