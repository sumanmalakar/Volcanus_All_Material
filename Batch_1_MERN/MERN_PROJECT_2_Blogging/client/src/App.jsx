import React, { useContext } from "react";
import { AppContext } from "./context/App_Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import Profile from "./components/Profile";
import Register from "./components/Register";
import AllUsers from "./components/AllUsers";
import Upload from "./components/Upload";

const App = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/addpost" element={<AddPost />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/users" element={<AllUsers />} /> 
          <Route path="/upload" element={<Upload />} />


        </Routes>
      </Router>
    </>
  );
};

export default App;
