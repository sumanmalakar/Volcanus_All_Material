import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "@fontsource/roboto/700.css";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../context/Appcontext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const AppContext = useContext(myContext);
  const { login } = AppContext;
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (
      result.message != "Invalid Credential.." &&
      result.message != "User not exist..!"
    ) {
      navigate("/company");
    }
  };
  
  return (
    <>
      <Box
        component="div"
        className="login d-flex  w-100 "
      >
        {/* Left side Image */}
        <Box
          component="div"
          sx={{ width: "160%", height: "100vh" }}
          className="left_side"
        >
          <img
            style={{ height: "100vh", width: "100%" }}
            src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"
            alt=""
          />
        </Box>

        {/* Right side Content Login content */}
        <Box
          component="form"
          onSubmit={loginHandler}
          className="d-flex flex-column  justify-content-center  align-items-center  w-100 gap-4 "
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
            <Typography variant="h4" className="fw-bold my-2 ">
              Welcome Back..!
            </Typography>
          </div>

          <div className="w-100 text-center d-flex flex-column  align-items-center  justify-content-center  gap-3">
            <TextField
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "70%" }}
              label="Email"
              color="secondary"
              variant="filled"
            />
            <TextField
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "70%" }}
              label="Password"
              color="secondary"
              variant="filled"
            />
          </div>

          <Button
            sx={{ width: "70%", padding: "0.6rem" }}
            type="submit"
            variant="contained"
            color="secondary"
            size="small"
          >
            Login
          </Button>

          <Typography sx={{ marginLeft: "20%" }} variant="h6">
            Create Your Account
            <Link
              style={{ color: " rgb(156,39,176)" }}
              className="mx-1"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;
