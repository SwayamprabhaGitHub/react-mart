import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Products />
      </main>
      <footer></footer>
    </React.Fragment>
  );
};

export default App;
