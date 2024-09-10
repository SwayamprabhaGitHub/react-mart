import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialMailid = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [mailId, setMailId] = useState(initialMailid);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setMailId(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };
  const logoutHandler = () => {
    setToken(null);
    setMailId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token: token,
    mailId: mailId,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
