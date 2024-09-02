import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import Product_Detail from "./pages/Product_Detail";
import UserProduct from "./pages/UserProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product_Detail />} />
        <Route path="/product/user" element={<UserProduct />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
