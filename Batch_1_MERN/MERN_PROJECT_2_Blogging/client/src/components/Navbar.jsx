import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";


const Navbar = () => {
  const data = useContext(AppContext);
  return (
    <>
      <div className="nav_bar">
        <Link to={"/"} className="left_brand">
          <h2>WDM</h2>
        </Link>

        <div className="right">
          {data.isAuthenticated && (
            <CgProfile
              style={{
                fontSize: "2.2rem",
                ":hover": {
                  backgroundColor: "red",
                  // other hover styles...
                },
              }}
            />
          )}
          {data.isAuthenticated && (
            <Link to={"/addpost"} className="btn btn-warning">
              AddPost
            </Link>
          )}

          {data.isAuthenticated && (
            <Link to={"/upload"} className="btn btn-warning">
              Upload
            </Link>
          )}

          {data.isAuthenticated && (
            <button className="btn btn-info" onClick={data.logOut}>
              LogOut
            </button>
          )}
          {!data.isAuthenticated && (
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
          {!data.isAuthenticated && (
            <Link to={"/register"} className="btn btn-warning">
              SignUp
            </Link>
          )}

          <Link to={"/users"} className="btn btn-info">AllUsers</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
