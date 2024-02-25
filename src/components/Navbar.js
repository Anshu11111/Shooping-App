import React from "react";
import './Navbar.css'
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import img from "../Assets/logo.png"
function Navbar() {
  return (
    <div className="nav">
      <div>
        <NavLink to="/">
        <img src={img}  width={150} height={100}/>
        </NavLink>
        </div>
        <div className="p-cet">
            <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <div>
            <NavLink to="/cart">
          <FaCartArrowDown />
          </NavLink>
          </div>
         
      </div>
    </div>
  );
}

export default Navbar;
