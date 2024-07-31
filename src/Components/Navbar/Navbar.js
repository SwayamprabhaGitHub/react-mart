import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">
          Home
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/store">
          Store
        </NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/about">
          About
        </NavLink>
      </div>
      <CartButton onShowCart={showCartHandler} />
      {showCart && <Cart onShowCart={showCartHandler} />}
    </nav>
  );
};

export default Navbar;
