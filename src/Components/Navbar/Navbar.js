import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import AuthContext from "../store/auth-context";

const Navbar = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <nav className="nav-bar">
      <div className="nav-bar-div">
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="store"
        >
          Store
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="contactUs"
        >
          Contact Us
        </NavLink>
      </div>
      {!authCtx.isLoggedin && (
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="login"
        >
          Login
        </NavLink>
      )}
      {authCtx.isLoggedin && (
        <button
          onClick={() => {
            authCtx.logout();
            navigate('/');
          }}
        >
          LogOut
        </button>
      )}
      <CartButton onShowCart={showCartHandler} />
      {showCart && <Cart onShowCart={showCartHandler} />}
    </nav>
  );
};

export default Navbar;
