import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product_Detail from "./components/Product_Detail";
import Navbar from "./components/Navbar";
import Related_Product from "./components/Related_Product";
import Search_Product from "./components/Search_Product";
import Cart from "./components/Cart";
import { items } from "./data";

const App = () => {
  const [data, setData] = useState(items);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("my cart", cart);
  };
  
  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Products data={data} addToCart={addToCart} />}
          />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path="/search/:term" element={<Search_Product />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
