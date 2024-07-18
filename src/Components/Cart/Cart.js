import React from "react";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import "./Cart.css";

const Cart = (props) => {
  return (
    <Modal className="cart-modal">
      <header className="cart-header">
        <h1>Cart</h1>
        <button
          className="cart-close-btn"
          type="button"
          onClick={() => props.onShowCart()}
        >
          X
        </button>
      </header>
      <CartItems />
      <footer className="cart-footer">
        <div className="total-amt">
          <h3>Total</h3>
          <b>&#8377; {0}</b>
        </div>
        <button className="purchase-btn" type="button">
          PURCHASE
        </button>
      </footer>
    </Modal>
  );
};

export default Cart;
