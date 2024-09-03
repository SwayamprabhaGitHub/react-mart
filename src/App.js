import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CartProvider from "./Components/store/cartProvider";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Root from "./Pages/Root";
import Error from "./Pages/Error";
import ContactUs from "./Pages/ContactUS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contactUs", element: <ContactUs /> },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
