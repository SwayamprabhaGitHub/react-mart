import React, { useContext } from "react";
import "./ProductItems.css";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const ProductItems = (props) => {
  const cartCnxt = useContext(CartContext);
  return (
    <li >
      <Link className="product-items" to={`${props.item.id}`}>
        <h3>{props.item.title}</h3>
        <img src={props.item.imageUrl} alt="ProductImg" />
        <div className="product-div">
          <b>&#8377; {props.item.price}</b>
          <button
            className="add-to-cart"
            type="button"
            onClick={() => {
              cartCnxt.addEle({ ...props.item, quantity: 1 });
            }}
          >
            ADD TO CART
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProductItems;
