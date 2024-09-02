import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // console.log(useLocation());

  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <div className="nav_bar">
        <div className="left"></div>
        <div className="right">
          <Link to={"/"} className="items">
            Home
          </Link>
          <Link to={"/product"} className="items">
            Products
          </Link>
          <Link to={"/contact"} className="items">
            Contacts
          </Link>

          {location.pathname != "/product" && (
            <>
              <Link to={"/login"} className="items">
                Login
              </Link>
              <Link to={"/register"} className="items">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
