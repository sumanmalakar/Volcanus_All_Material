import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    // alert("Your form has been submited" + searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="nav_bar">
      <Link to={"/"} className="brand">
        <img src={logo} alt="" />
      </Link>
      <form className="search_bar" onSubmit={submitHandler}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="cart mx-5">
        <Link to={"/cart"} type="button" className="btn btn-primary position-relative">
          <FaShoppingCart style={{ fontSize: "1.5rem" }} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
