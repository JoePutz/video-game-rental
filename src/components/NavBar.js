import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav>
      <NavLink className="navlink" exact to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/rentals">Checked Out Books</NavLink>
      <NavLink className="navlink" to="/search">Search</NavLink>
    </nav>
  );
}

export default NavBar;