import React from "react";
import CartButton from "../Cart/CartButton";
import "./Navbar.css";


const Navbar = () => {
    return <nav className="nav-bar">
        <div className="nav-bar-div">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/">Store</a>
        <a className="nav-link" href="/">About</a>
        </div>
        <CartButton></CartButton>
    </nav>
}

export default Navbar