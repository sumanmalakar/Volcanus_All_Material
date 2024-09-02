import { Box, Button, TextField, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useContext } from "react";
import axios from "axios";
import { myContext } from "../context/Appcontext";

const Company = () => {
  const [name, setname] = useState("");
  const [tagline, settagline] = useState("");
  const [logo, setlogo] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const companyContext = useContext(myContext);
  const {
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
    if (userdetails.length < 1) {
      await createCompany(name, tagline, logo);
    } else {
      await updateCompany(companyId, name, tagline, logo);
    }
  };

  // set company id
  useEffect(() => {
    if (userdetails.length > 0) {
      setCompanyId(userdetails[0]._id);
      setname(userdetails[0].name);
      settagline(userdetails[0].tagline);
      // setlogo(userdetails[0].logo);
    } else {
      setname("");
      setlogo("");
      settagline("");
    }
  }, [userdetails, token, reload]);

  // fetch company by userid
  useEffect(() => {
    const getCompanyByUserId = async (userId) => {
      try {
        const api = await axios.get(
          `
        ${url}/companies/getcompanybyuserid/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        // console.log("company", api);
        if (api.data.company) {
          setUserdetails(api.data.company);
        } else {
          setUserdetails([]);
        }
        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    getCompanyByUserId(userId);
  }, [token, reload, userId]);

  // delete submit
  const deleteSubmit = () => {
    deleteCompany(companyId);
    setname("");
    setlogo("");
    settagline("");
  };

  return (
    <>
      <Box
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
              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
                    <Button
                      className=" d-flex justify-content-center align-items-center"
                      component="label"
                      variant="outlined"
                      sx={{ width: "90%", padding: "5px", overflow: "hidden" }}
                      startIcon={<CloudUploadIcon />}
                    >
                      {userdetails[0].logo}

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

              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
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
                      submit
                    </Button>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Company;
