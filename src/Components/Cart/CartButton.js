import React from "react";
import "./CartButton.css";

const CartButton = () => {
  return (
    <button className="cart-btn" type="button">
      Cart ({0})
    </button>
  );
};

export default CartButton;
