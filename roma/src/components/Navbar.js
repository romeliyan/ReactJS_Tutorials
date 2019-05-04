import React from "react";
import { Link, NavLink } from "react-router-dom";

//function
const Navbar = () => {
  return (
    <nav className="nav-wrapper.red.darken-3">
      <div className="container">
        <a className="brand-logo">Roma</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
