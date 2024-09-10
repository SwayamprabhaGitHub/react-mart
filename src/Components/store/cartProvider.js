import React, { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
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
    const addProduct = async () => {
      const userMail = authCtx.mailId.replace(".", "");
      const response = await fetch(
        `https://react-mart-3a28a-default-rtdb.firebaseio.com/${userMail}/cart-items.json`,
        {
          method: "PUT",
          body: JSON.stringify(cartElements),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message);
      }
    };
    addProduct();
  };
  const removeEleToCartHandler = (id) => {};

  useEffect(() => {
    const getCartData = async () => {
      if (authCtx.isLoggedin) {
        const userMail = authCtx.mailId.replace(".", "");
        const response = await fetch(
          `https://react-mart-3a28a-default-rtdb.firebaseio.com/${userMail}/cart-items.json`
        );
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setList(data);
        }
      } else {
        setList([]);
      }
    };
    getCartData();
  }, [authCtx.isLoggedin, authCtx.mailId]);
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
