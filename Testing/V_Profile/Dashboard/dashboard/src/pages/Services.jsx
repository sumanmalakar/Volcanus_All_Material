import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { myContext } from "../context/Appcontext";
import axios from "axios";

const Services = () => {
  const [servicesId, setservicesId] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const [serviceInput, setserviceInput] = useState([
    { title: "", description: "" },
  ]);
  const serviceContext = useContext(myContext);
  const {
    addService,
    updateService,
    deleteService,
    token,
    url,
    userId,
    reload,
  } = serviceContext;
  const { title, description } = serviceInput;

  //  onchange handler
  const serviceHandleChange = (e) => {
    const { name, value } = e.target;
    setserviceInput({ ...serviceInput, [name]: value });
  };

  // submit handler
  const serviceSubmit = async (e) => {
    e.preventDefault();

    if (userdetails.length < 1) {
      await addService(title, description);
    } else {
      updateService(servicesId, title, description);
    }
  };

  // set service id
  useEffect(() => {
    if (userdetails.length > 0) {
      setservicesId(userdetails[0]._id);
      setserviceInput({
        title: userdetails[0].title,
        description: userdetails[0].description,
      });
    } else {
      setserviceInput({ title: "", description: "" });
    }
  }, [userdetails, token, reload]);

  // fetch service by userid
  useEffect(() => {
    const getServiceByuserId = async (userid) => {
      try {
        const api = await axios.get(
          `
        ${url}/service/getservicesbyUserId/${userid}`,
          {
            headers: {
              "Content-Type": "application/json",
              Auth: token,
            },
            withCredentials: true,
          }
        );
        // console.log(api);
        if (api.data.services) {
          setUserdetails(api.data.services);
        } else {
          setUserdetails([]);
        }
        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    getServiceByuserId(userId);
  }, [token, userId, reload]);

  const deleteSubmit = () => {
    deleteService(servicesId);
    setserviceInput({ title: "", description: "" });
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
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
          <Box
            sx={{ height: "87vh", backgroundColor: "rgb(255,255,255)" }}
            component={"div"}
            className="company-container d-flex justify-content-center align-items-center"
          >
            <Box
              sx={{ width: { sx: "100%", sm: "80%", md: "40%" } }}
              component="form"
              onSubmit={serviceSubmit}
              className="d-flex justify-content-center align-items-center flex-column gap-4 p-4 border"
            >
              <Typography variant="h4" className=" fw-bold ">
                Services{" "}
              </Typography>

              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
                    <>
                      <TextField
                        size="small"
                        value={title}
                        name="title"
                        onChange={serviceHandleChange}
                        label="Title"
                        sx={{ width: "90%" }}
                        focused
                      />
                      <TextField
                        focused
                        size="small"
                        value={description}
                        name="description"
                        onChange={serviceHandleChange}
                        label="Description"
                        sx={{ width: "90%" }}
                      />
                    </>
                  ) : (
                    <>
                      <TextField
                        size="small"
                        value={title}
                        name="title"
                        onChange={serviceHandleChange}
                        label="Title"
                        sx={{ width: "90%" }}
                      />
                      <TextField
                        size="small"
                        value={description}
                        name="description"
                        onChange={serviceHandleChange}
                        label="Description"
                        sx={{ width: "90%" }}
                      />
                    </>
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

export default Services;
