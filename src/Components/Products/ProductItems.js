import React from "react";
import "./ProductItems.css";

const ProductItems = (props) => {
  return (
    <li className="product-items">
      <h3>{props.title}</h3>
      <img src={props.imageUrl} alt="ProductImg" />
      <div className="product-div">
        <b>&#8377; {props.price}</b>
        <button className="add-to-cart" type="button">
          ADD TO CART
        </button>
      </div>
    </li>
  );
};

export default ProductItems;
