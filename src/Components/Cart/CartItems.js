import React, { useContext } from "react";
import "./CartItems.css";
import CartContext from "../store/cart-context";

const CartItems = () => {
  const cartCnxt = useContext(CartContext);
  if (cartCnxt.list.length === 0) {
    return <h2 className="cart-empty">Cart is EMPTY!</h2>;
  }
  return (
    <section className="cart-items">
      <table>
        <tbody>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th></th>
          </tr>
          {cartCnxt.list.map((ele, i) => {
            return (
              <tr key={i}>
                <td className="cart-item-title">
                  <img src={ele.imageUrl} alt="..." width={80} />
                  <p>{ele.title}</p>
                </td>
                <td>&#8377; {ele.price}</td>
                <td>x {ele.quantity}</td>
                <td>
                  <button className="remove-btn">REMOVE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CartItems;
