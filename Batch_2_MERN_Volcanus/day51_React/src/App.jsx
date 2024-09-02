import React, { useEffect, useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import { items } from "./Data";
import FormHandling from "./FormHandling";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [product, setproducts] = useState(items);
  const superman = 100;

  useEffect(() => {
    document.title = product[0].category;
  }, [product]); // dependency array

  return (
    <>
      <Router>
        <Navbar setproducts={setproducts} />
        <Routes>
          <Route path="/" element={<Products product={product} />} />
          {/* <Route path="/test" element={<Test />} /> */}

          {/* dynamic Route */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>

      {/* <FormHandling /> */}
    </>
  );
};

export default App;
