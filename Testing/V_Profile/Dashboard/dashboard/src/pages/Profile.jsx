import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { myContext } from "../context/Appcontext";
import axios from "axios";

const Profile = () => {
  const [profileId, setProfileId] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const [profileInput, setprofileInput] = useState([
    { name: "", email: "", phoneNumber: "", address: "" },
  ]);
  const profileContext = useContext(myContext);
  const {
    createProfile,
    updateProfile,
    deleteProfile,
    token,
    url,
    userId,
    reload,
  } = profileContext;
  const { name, email, phoneNumber, address } = profileInput;

  // onchangehnadler
  const profileHandleChange = (e) => {
    const { name, value } = e.target;
    setprofileInput({ ...profileInput, [name]: value });
  };

  // submit handle
  const profileSubmit = async (e) => {
    e.preventDefault();
    if (userdetails.length < 1) {
      await createProfile(name, email, phoneNumber, address);
    } else {
      await updateProfile(profileId, name, email, phoneNumber, address);
    }
  };

  //  Get profileid
  useEffect(() => {
    if (userdetails.length > 0) {
      setProfileId(userdetails[0]._id);
      setprofileInput({
        name: userdetails[0].name,
        email: userdetails[0].email,
        phoneNumber: userdetails[0].phoneNumber,
        address: userdetails[0].address,
      });
    } else {
      setprofileInput({ name: "", email: "", phoneNumber: "", address: "" });
    }
  }, [userdetails, token, reload]);

  // fetch by userid
  useEffect(() => {
    const getProfileByUserId = async (userId) => {
      try {
        const api = await axios.get(
          `
          ${url}/profiles/profileByUserID/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              // Auth: token,
            },
            withCredentials: true,
          }
        );
        console.log(api, "user");
        if (api.data.profile) {
          // setUserdetails(api.data.media);
        } else {
          setUserdetails([]);
        }
        // return api.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    // getProfileByUserId(userId);
  }, [token, reload, userId]);

  // delete submit
  const deleteSubmit = () => {
    deleteProfile(profileId);
    setprofileInput({ name: "", email: "", phoneNumber: "", address: "" });
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
            className="profile-container d-flex justify-content-center align-items-center"
          >
            <Box
              sx={{ width: { sx: "100%", sm: "80%", md: "40%" } }}
              component="form"
              onSubmit={profileSubmit}
              className="d-flex justify-content-center align-items-center flex-column gap-4 p-4 border"
            >
              <Typography variant="h4" className=" fw-bold ">
                Profile{" "}
              </Typography>
              <TextField
                size="small"
                value={name}
                name="name"
                onChange={profileHandleChange}
                label="Name"
                sx={{ width: "90%" }}
              />
              <TextField
                size="small"
                value={email}
                name="email"
                onChange={profileHandleChange}
                label="Email"
                sx={{ width: "90%" }}
              />
              <TextField
                size="small"
                value={phoneNumber}
                name="phoneNumber"
                onChange={profileHandleChange}
                label="Phone Number"
                sx={{ width: "90%" }}
              />
              <TextField
                size="small"
                value={address}
                name="address"
                onChange={profileHandleChange}
                label="address"
                sx={{ width: "90%" }}
              />
              {/* <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ width: "90%" }}
              >
                Submit
              </Button> */}
              {userdetails && (
                <>
                  {" "}
                  {userdetails.length > 0 ? (
                    <>
                      {" "}
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
                    </>
                  ) : (
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      sx={{ width: "90%" }}
                    >
                      Submit
                    </Button>
                  )}{" "}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
