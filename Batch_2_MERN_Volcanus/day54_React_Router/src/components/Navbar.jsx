import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="left">WDM</div>
        <div className="right">
            <Link to={"/"} className="items">Home</Link>
            <Link to={"/about"} className="items">About</Link>
            <Link to={"/contact"} className="items">Contact</Link>
            <Link to={"/team"} className="items">Teams</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar