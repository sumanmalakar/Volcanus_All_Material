import { Box, Button, TextField, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useContext } from "react";
import axios from "axios";
import { myContext } from "../context/Appcontext";
import Login_First from "../components/Login_First";

const Company = () => {
  const [name, setname] = useState("");
  const [tagline, settagline] = useState("");
  const [logo, setlogo] = useState("");
  const [companyId, setCompanyId] = useState("");
 
  const companyContext = useContext(myContext);
  const {
    companyDetails,
    setcompanyDetails,
    createCompany,
    updateCompany,
    deleteCompany,
    token,
    url,
    userId,
    reload,
  } = companyContext;

  const companySubmit = async (e) => {
    e.preventDefault();
    if (companyDetails.length < 1) {
      await createCompany(name, tagline, logo);
    } else {
      await updateCompany(companyId, name, tagline, logo);
    }
  };

  // set company id
  useEffect(() => {
    if (companyDetails.length > 0) {
      setCompanyId(companyDetails[0]._id);
      setname(companyDetails[0].name);
      settagline(companyDetails[0].tagline);
      // setlogo(userdetails[0].logo);
    } else {
      setname("");
      setlogo("");
      settagline("");
    }
  }, [companyDetails, token, reload]);



  // delete submit
  const deleteSubmit = () => {
    deleteCompany(companyId);
    setname("");
    setlogo("");
    settagline("");
  };

  return (
    <>
    {/* {token ?(<></>):(<></>)} */}
    {token ?(<>  <Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(238,238,238)",
          height: "100vh",
        }}
      >
        <SideBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "3rem",
          }}
        >
          <Box
            sx={{ height: "87vh", backgroundColor: "rgb(255,255,255)" }}
            component={"div"}
            className="company-container d-flex justify-content-center align-items-center"
          >
            <Box
              sx={{ width: { sx: "100%", sm: "80%", md: "40%" } }}
              component="form"
              onSubmit={companySubmit}
              className="d-flex justify-content-center align-items-center flex-column gap-4 p-4 border"
            >
              <Typography variant="h4" className=" fw-bold ">
                Company{" "}
              </Typography>
              <TextField
                size="small"
                value={name}
                onChange={(e) => setname(e.target.value)}
                label="Name"
                sx={{ width: "90%" }}
              />
              <TextField
                size="small"
                value={tagline}
                onChange={(e) => settagline(e.target.value)}
                label="Tagline"
                sx={{ width: "90%" }}
              />
              {companyDetails && (
                <>
                  {" "}
                  {companyDetails.length > 0 ? (
                    <Button
                      className=" d-flex justify-content-center align-items-center"
                      component="label"
                      variant="outlined"
                      sx={{ width: "90%", padding: "5px", overflow: "hidden" }}
                      startIcon={<CloudUploadIcon />}
                    >
                      {companyDetails[0].logo}

                      <input
                        type="file"
                        style={{ display: "none" }}
                        value={logo}
                        onChange={(e) => setlogo(e.target.value)}
                      />
                    </Button>
                  ) : (
                    <Button
                      className=" d-flex justify-content-center align-items-center"
                      component="label"
                      variant="outlined"
                      sx={{ width: "90%", padding: "5px", overflow: "hidden" }}
                      startIcon={<CloudUploadIcon />}
                    >
                      {logo == "" ? "upload logo" : logo}

                      <input
                        type="file"
                        style={{ display: "none" }}
                        value={logo}
                        onChange={(e) => setlogo(e.target.value)}
                      />
                    </Button>
                  )}
                </>
              )}

              {companyDetails && (
                <>
                  {" "}
                  {companyDetails.length > 0 ? (
                    <Box className=" d-flex gap-3" sx={{ width: "90%" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{ width: "90%" }}
                      >
                        Update
                      </Button>
                      <Button
                        sx={{ width: "90%" }}
                        variant="contained"
                        onClick={deleteSubmit}
                        color="error"
                      >
                        Delete
                      </Button>
                    </Box>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: "90%" }}
                      color="secondary"
                    >
                      {" "}
                      Add
                    </Button>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box></>):(<><Login_First/></>)}
    
    </>
  );
};

export default Company;
