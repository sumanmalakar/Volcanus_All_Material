import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_bar">
      <Link to={"/"} className="left item">
        WDM
      </Link>
      <div className="right">
        <Link to={"/about"} className="item">
          About
        </Link>
        <Link to={"/career"} className="item">
          Career
        </Link>
        <Link to={"/contact"} className="item">
          Contact
        </Link>
        <Link to={"/team"} className="item">
          Team
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
