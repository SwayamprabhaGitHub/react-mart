import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
    return <header>
        <Navbar />
        <h1 className="heading">The React-Mart</h1>
    </header>
}

export default Header;