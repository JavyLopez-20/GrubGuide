import React from "react";
import { Link, } from "react-router-dom";

const Navbar = () => {
    return(
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/search">Search</Link>
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
    );
};

export default Navbar;