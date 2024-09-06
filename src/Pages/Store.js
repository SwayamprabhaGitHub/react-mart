import React, { useContext } from "react";
import Products from "../Components/Products/Products";
import AuthContext from "../Components/store/auth-context";
import { Navigate } from "react-router-dom";

const Store = () => {
  const authCtx = useContext(AuthContext);
  if(!authCtx.isLoggedin) {
    return <Navigate to="/login" replace />;
  }
  return <main>
    <Products />
  </main>
};

export default Store;
