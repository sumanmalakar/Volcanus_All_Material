import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setToken } =
    useContext(ProductContext);

  return (
    <div className="nav">
      <div className="nav_bar">
        <div className="left">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <h3>Shopping Cart</h3>
          </Link>
        </div>

        <div className="right">
          {isAuthenticated && (
            <>
              <Link to={"/addproduct"} className="btn btn-primary mx-2">
                Add Product
              </Link>
            </>
          )}

          {location.pathname != "/admin" && (
            <>
              {!isAuthenticated && (
                <>
                  <Link to={"/login"} className="btn btn-secondary mx-2">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn btn-success mx-2">
                    Register
                  </Link>
                </>
              )}

              {isAuthenticated && (
                <>
                  <div
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      localStorage.removeItem("token");
                      setIsAuthenticated(false);
                      setToken(" ");
                      alert("Logout Successfull");
                      navigate("/");
                    }}
                  >
                    LogOut
                  </div>

                  <Link to={"/profile"} className="btn btn-info mx-2">
                    Profile
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
