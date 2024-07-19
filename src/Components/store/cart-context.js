import React from "react";

const CartContext = React.createContext({
  list: [],
  addEle: (ele) => {},
  removeEle: (id) => {},
});

export default CartContext;
