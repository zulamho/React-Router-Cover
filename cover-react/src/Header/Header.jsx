import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <h1 className="cover">Cover</h1>

        <nav className="nav">
          <NavLink to="/home" activeClassName="navLink">
            Home
          </NavLink>
          <NavLink to="/Features" activeClassName="navLink">
            Features
          </NavLink>

          <NavLink to="/Contact" activeClassName="navLink" >
             Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
