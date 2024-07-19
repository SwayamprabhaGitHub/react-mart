import React, { useContext } from "react";
import "./CartButton.css";
import CartContext from "../store/cart-context";

const CartButton = (props) => {
  const cartCnxt = useContext(CartContext);
  let totalEle = 0;
  cartCnxt.list.forEach((ele) => {
    totalEle += ele.quantity;
  });
  return (
    <button
      className="cart-btn"
      type="button"
      onClick={() => props.onShowCart()}
    >
      Cart ({totalEle})
    </button>
  );
};

export default CartButton;
