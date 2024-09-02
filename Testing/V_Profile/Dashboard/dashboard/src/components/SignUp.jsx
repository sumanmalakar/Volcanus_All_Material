import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import "@fontsource/roboto/700.css";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../context/Appcontext";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpInput, setsignUpInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    description: "",
  });
  const { name, email, password, phone, address, description } = signUpInput;
  const signUpHandleChange = (e) => {
    const { name, value } = e.target;
    setsignUpInput({ ...signUpInput, [name]: value });
  };
  const AppContext = useContext(myContext);
  const { signUp } = AppContext;

  const signUpSubmit = async (e) => {
    e.preventDefault();
    await signUp(name, email, password, phone, address, description);
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setsignUpInput({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      description: "",
    });
  };

  return (
    <>
      <Box component="div" className="login d-flex  w-100 ">
        {/* Left side Image */}
        <Box component="div" sx={{ width: "80%", height: "100vh" }}>
          <img
            style={{ height: "100vh", width: "100%" }}
            src="https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_1280.jpg"
            alt=""
          />
        </Box>

        {/* Right side Content Login content */}
        <Box
          sx={{ width: "50%", height: "100vh" }}
          component="form"
          onSubmit={signUpSubmit}
          className="d-flex  flex-column justify-content-center align-items-center gap-4"
        >
          <div>
            <Box
              component="div"
              className="d-flex align-items-center  justify-content-center  "
              sx={{ marginRight: "2rem" }}
            >
              <div className="mx-3" style={{ width: "50px" }}>
                <img
                  style={{ width: "60px", borderRadius: "50%" }}
                  src="https://isoftzone.com/assets/img/logo4.png"
                  alt=""
                />
              </div>
              <Typography variant="h6" className="fw-bold ">
                i-SOFT
              </Typography>
              <Typography variant="h6" color="secondary" className="fw-bold ">
                ZONE
              </Typography>
            </Box>
          </div>

          <Box sx={{ marginRight: "6.9rem" }}>
            <Typography variant="h4" className="fw-bold">
              Create an account...
            </Typography>
            <Typography variant="h6" className="">
              Let's get Started
            </Typography>
          </Box>

          <Box className="w-100 gap-3  d-flex  flex-column  align-items-center  justify-content-center ">
            <div className="d-flex gap-3  ">
              <TextField
                name="name"
                value={name}
                onChange={signUpHandleChange}
                label="Name"
                color="secondary"
                variant="filled"
                size="small"
              />
              <TextField
                name="phone"
                value={phone}
                onChange={signUpHandleChange}
                label="Phone"
                color="secondary"
                variant="filled"
                size="small"
              />
            </div>

            <div className="d-flex gap-3">
              <TextField
                name="email"
                value={email}
                onChange={signUpHandleChange}
                label="Email"
                color="secondary"
                variant="filled"
                size="small"
              />
              <TextField
                name="password"
                value={password}
                onChange={signUpHandleChange}
                label="Password"
                color="secondary"
                variant="filled"
                size="small"
              />
            </div>

            <div style={{ width: "82%" }} className="d-flex gap-3 flex-column ">
              <TextField
                name="address"
                value={address}
                onChange={signUpHandleChange}
                label="Address"
                color="secondary"
                variant="filled"
                size="large"
              />
              <TextField
                name="description"
                value={description}
                onChange={signUpHandleChange}
                label="Description"
                color="secondary"
                variant="filled"
                size="large"
              />
            </div>
            <Button
              sx={{ width: "40%", padding: "0.6rem", marginRight: "14rem" }}
              type="submit"
              variant="contained"
              color="secondary"
              className=" mt-2 "
            >
              Create account
            </Button>
          </Box>

          <Box
            sx={{ marginRight: "30%" }}
            component="div"
            className="d-flex align-items-center gap-2 "
          >
            <Typography variant="h6">
              Already have an account?
              <Link
                style={{ color: " rgb(156,39,176)" }}
                className="mx-1"
                to={"/"}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
