import React, { useState } from "react";
import CartButton from "../Cart/CartButton";
import "./Navbar.css";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <nav className="nav-bar">
      <div className="nav-bar-div">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/">
          Store
        </a>
        <a className="nav-link" href="/">
          About
        </a>
      </div>
      <CartButton onShowCart={showCartHandler} />
      {showCart && <Cart onShowCart={showCartHandler} />}
    </nav>
  );
};

export default Navbar;
