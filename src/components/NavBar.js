import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/rentals">Checked Out Books</NavLink>
      <NavLink to="/search">Search</NavLink>
    </div>
  );
}

export default NavBar;
