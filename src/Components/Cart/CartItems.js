import React from "react";
import "./CartItems.css";

const CartItems = () => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
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
          {cartElements.map((ele, i) => {
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
