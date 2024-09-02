import React from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Company from "./form/Company";
import SocialMedia from "./form/SocialMedia";
import SocialMediaForm from "./form/SocialMedia";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Navbar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/company" element={<Company />} />
          <Route path="/socialMedia" element={<SocialMediaForm />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
