import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // console.log(useLocation())
  const location = useLocation();
  // &&
  console.log(location.pathname);
  return (
    <>
      <div className="nav_bar">
        <div className="left">WDM</div>
        <div className="right">
          <Link to={"/"} className="items">
            Home
          </Link>
          <Link to={"/product"} className="items">
            Product
          </Link>
          <Link to={"/about"} className="items">
            About
          </Link>
          {location.pathname != "/product" && (
            <>
              <Link to={"/contact"} className="items">
                Contact
              </Link>
              <Link to={"/career"} className="items">
                Career
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
