import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product_Detail from "./pages/Product_Detail";
import Navbar from "./components/Navbar";

// useState, useEffect, [useParams, useLocation, useNavigate]  useContext, Redux - [useSelector, useDispatch]

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product_Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
