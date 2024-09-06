import React, { useContext, useRef } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Components/store/auth-context";

const LoginPage = () => {
    const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginHandler = async () => {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqF-P9sLBXEVw7OTx7G96OP4Qf9gIzPcI",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          authCtx.login(data.idToken);
          navigate('/store');
        } else {
            const data = await response.json();
          alert("Authentication failed");
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    loginHandler();
  };
  return (
    <form className="login-form" onSubmit={loginFormHandler}>
      <h2>Login</h2>
      <div>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" id="loginEmail" required ref={emailInputRef} />
      </div>
      <div>
        <label htmlFor="loginPswrd">Password</label>
        <input
          type="password"
          id="loginPswrd"
          required
          ref={passwordInputRef}
        />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
