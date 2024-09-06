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
import ProductDetails from "./Pages/ProductDetails";
import LoginPage from "./Pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "about", element: <About /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "store/:id", element: <ProductDetails /> },
      { path: "login", element: <LoginPage /> },
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
