import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [list, setList] = useState([]);
  const addEleToCartHandler = (ele) => {
    const updatingList = [...list, ele];
    const mapList = {};
    updatingList.forEach((ele) => {
      if (mapList[ele.id]) {
        mapList[ele.id].quantity += 1;
      } else {
        mapList[ele.id] = { ...ele };
      }
    });
    const cartElements = Object.values(mapList);
    setList(cartElements);
  };
  const removeEleToCartHandler = (id) => {};
  const cartContext = {
    list: list,
    addEle: addEleToCartHandler,
    removeEle: removeEleToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
