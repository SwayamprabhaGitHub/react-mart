import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import CartProvider from "./Components/store/cartProvider";

const App = () => {
  return (
    <CartProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Products />
      </main>
      <footer></footer>
    </CartProvider>
  );
};

export default App;
