import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div className="navbar">
            <h1>Text</h1>
            <NavLink exact to="/" 
                >Home</NavLink>
            <NavLink to="/rentals" 
                >Rentals</NavLink>
            <NavLink to="/search" 
                >Search</NavLink>
        </div>
    );
}

export default NavBar;