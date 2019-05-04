import React from "react";

//function
const Navbar = () => {
  return (
    <nav className="nav-wrapper.red.darken-3">
      <div className="container">
        <a className="brand-logo">Roma</a>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
