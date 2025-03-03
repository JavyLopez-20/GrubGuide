import react from "react";
import { Link, link } from "react-router-dom";

const Navbar = () => {
    <nav>
        <Link to="/">Home</Link>
        <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </nav>
};

export default Navbar;