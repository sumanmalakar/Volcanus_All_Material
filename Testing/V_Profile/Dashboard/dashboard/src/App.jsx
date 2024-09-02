import React from "react";
import "@fontsource/roboto/300.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AppointMent from "./pages/AppointMent";
import Company from "./pages/Company";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import SocialMedia from "./pages/SocialMedia.";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/company" element={<Company />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/socialmedia" element={<SocialMedia />} />
          <Route path="/appointment" element={<AppointMent />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
