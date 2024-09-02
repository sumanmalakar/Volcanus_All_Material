import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

const ProductState = (props) => {
  // const url = "http://localhost:1000/api";
  const url = "https://mern-api-batch-4-iezi.onrender.com/api";

  const [Products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await axios.get(`${url}/products/get`);
      console.log("products  = ", api.data.product);
      setProducts(api.data.product);
    };
    fetchDataFromAPI();
  }, [reload]);

  let data = 10;

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
      setIsAuthenticated(true);
    }
    const fetchProfile = async () => {
      const api = await axios.get(`${url}/user/profile`, {
        headers: {
          "Content-Type": "application/json",
          auth: token,
        },
      });
      console.log("user  = ", api.data);
      setProfile(api.data)
    };
    fetchProfile();
  }, [token]);

  // user register
  const register = async (name, email, phone, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      {
        name,
        email,
        phone,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //  setReload(!reload);
    // console.log("adding product ... ", api);
    return api.data;
  };

  // user login
  const login = async (email, password) => {
    const api = await axios.post(
      `${url}/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //  setReload(!reload);
    console.log("login data ... ", api.data);
    if (api.data.token) {
      localStorage.setItem("token", api.data.token);
      setIsAuthenticated(true);
      setToken(api.data.token);
    }

    return api.data;
  };

  // add product
  const addProduct = async (title, description, price, qty, img) => {
    const api = await axios.post(
      `${url}/products/add`,
      {
        title,
        description,
        price,
        qty,
        img,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setReload(!reload);
    // console.log("adding product ... ", api);
    return api.data;
  };


  // delete product by id
  const deleteProduct = async (id) => {
    const api = await axios.delete(`${url}/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReload(!reload);
    // console.log("adding product ... ", api);
    return api.data;
  };

  // logout

  return (
    <ProductContext.Provider
      value={{
        url,
        data,
        Products,
        addProduct,
        deleteProduct,
        register,
        login,
        isAuthenticated,
        setIsAuthenticated,
        setToken,
        reload,
        setReload,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
