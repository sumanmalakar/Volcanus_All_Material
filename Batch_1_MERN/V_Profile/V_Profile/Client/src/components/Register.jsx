import React, { useState, useContext } from 'react';
import { AppContext } from '../context/App_context';
import register from "../assets/register.png";
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const data = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [discription,setDiscription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Registration Data:', name, email, password,phone);
   const result =  await data.register(name, email, password,phone,address,discription);
    // console.log("register data",data.register)
    // const res= data.register
    console.log("Anuj",result)
    toast.success(result.message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
      });
      if(result.message!=="User already exists!"){
        setTimeout(()=>{
            navigate('/')
        },3000)
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="hidden md:block md:w-1/2">
      <img
        src={register}
        alt="Registration Image"
        style={{ width: '80%', height: '80%',margin:'3rem' }}
      />
  </div>
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Phone:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Address:
            </label>
            <input
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Discription:
            </label>
            <textarea
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              type="discription"
              placeholder='short discription'
              name="discription"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    <ToastContainer/>
    </div>
  );
};

export default Register;
