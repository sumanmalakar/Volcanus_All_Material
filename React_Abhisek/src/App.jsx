import React, { useState } from "react";
import UseEffect from "./components/UseEffect";
import FetchDataFromAPI from "./components/FetchDataFromAPI";
import FormHandling from "./components/FormHandling";
import Filter from "./components/Filter";
// // import MapData from "./components/Map";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Product from "./components/Product";
import Product_Detail from "./pages/Product_Detail";

// useParams, useLocation, useNavigate

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path="/api" element={<UseEffect />} />
          <Route path="/fetch" element={<FetchDataFromAPI />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
