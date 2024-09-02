import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
// import Home from "./components/Home";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product_Detail from "./pages/Product_Detail";

import IndianGov from './Gov/IndianGov'

const App = () => {
  const money = 10.230;
  const name  = "ram"
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Product_Detail />} />
        </Routes>
      </Router> */}
      <IndianGov money={money} />
    </>
  );
};

export default App;
