import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./App_context";

const App_State = (props) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [userId,setUserId]=useState("");

  
  const [Social,setSocial]=useState([])
  const [reload,setReload]=useState(false)
  
  const url = "http://localhost:1000/api";



  const register = async (name, email, password, phone,address,discription) => {
    try {
      const api = await axios.post(
        `${url}/register`,
        { name, email, password, phone,address,discription },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Registration Response:", api.data);
      return api.data;
    } catch (error) {
      if (error.response) {
        // console.log("Error response status:", error.response.status);
        // console.log("Response data:", error.response.data.message);
        return error.response.data;
      } else if (error.request) {
        console.log("No response received");
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const Login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // return api.data;
      console.log(api.data.token);
        setReload(!reload)
      // Setting token to Local Message
      setToken(api.data.token);
      window.localStorage.setItem("token", api.data.token);
      setToken(api.data.token);
      // console.log("userdata",api.data.user)
      setUserId(api.data.user._id)
      window.localStorage.setItem("UserID",api.data.user._id);
      


      return api.data;
      
    } catch (error) {
      if (error.response) {
        console.log("Error response status:", error.response.status);
        console.log("Response data:", error.response.data);
        return error.response.data;
      } else if (error.request) {
        console.log("No response received");
      } else {
        console.error("Error message:", error.message);
      }
    }
  };
  useEffect(() => {
    const myProfile = async () => {
      const api = await axios.get(`${url}/user`, {
        headers: {
          "Content-Type": "application/json",
          Auth: token,
        },
        withCredentials: true,
      });
      console.log(api.data.user);
      setUser(api.data.user);
    };
    myProfile();
    const Id = window.localStorage.getItem("UserID");
    console.log("volcanus==",Id);
    setUserId(Id)
    const jwtToken = window.localStorage.getItem("token");
    setToken(jwtToken);
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const SocialMedia = async (whatsApp, email, facebook, instagram, twitter,Skype,Discord,Linkdin,Website,location) => { 
    console.log("api hit")
      const api = await axios.post(
        `${url}/socialmedia/addlink`,
        { whatsApp, email, facebook, instagram, twitter,Skype,Discord,Linkdin,Website,location},
        {
          headers: {
            "Content-Type": "application/json",
            Auth:token
            
          },
          withCredentials: true,
        }
      );
      console.log("Add Social Links:", api);
      return api;

  };
  
  useEffect(()=>{
    
    
    const SocialMediaByUserId=async(id)=>{
      const api =await axios.get(`${url}/socialmediaByUserId/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Auth:token,
        },
        withCredentials: true,
      })
      console.log("getLinksss===",api.data.media[0]);
      setSocial(api.data.media[0])
      return api.data
    }
    // console.log("usrrid==",userId)
    SocialMediaByUserId(userId)
   
  },[userId])
  


  

  return (
    <AppContext.Provider
      value={{
        url,
        register,
        isAuthenticated,
        token,
        Login,
        reload,
        setReload,
      user,
        SocialMedia,
        userId,
        Social
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
