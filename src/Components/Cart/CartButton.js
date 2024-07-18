import React from "react";
import "./CartButton.css";

const CartButton = (props) => {
  return (
    <button
      className="cart-btn"
      type="button"
      onClick={() => props.onShowCart()}
    >
      Cart ({0})
    </button>
  );
};

export default CartButton;
