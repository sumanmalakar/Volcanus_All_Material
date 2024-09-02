import React from "react";
import { Link ,useLocation} from "react-router-dom";

const Navbar = () => {
  // console.log("this is use location wala hook",useLocation())
  const location = useLocation();
  return (
    <div>
      {location.pathname != "/contact" && (
        <div className="nav_bar">
          <Link to={"/"} className="left">
            WDM
          </Link>
          <div className="right">
            <Link to={"/about"} className="items">
              About
            </Link>
            <Link to={"/contact"} className="items">
              Contact
            </Link>
            <Link to={"/team"} className="items">
              Team
            </Link>
            <Link to={"/career"} className="items">
              Career
            </Link>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
