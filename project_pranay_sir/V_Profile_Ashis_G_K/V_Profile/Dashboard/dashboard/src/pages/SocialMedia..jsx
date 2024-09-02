import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { useContext } from "react";
import { myContext } from "../context/Appcontext";
import axios from "axios";
import Login_First from "../components/Login_First";

const SocialMedia = () => {
  const [socialMediaId, setsocialMediaId] = useState("");
 
  const [socialInput, setsocialInput] = useState({
    whatsApp: "",
    instagram: "",
    facebook: "",
    email: "",
    location: "",
    Discord: "",
    twitter: "",
    Skype: "",
    Linkdin: "",
    Website: "",
  });
  const {
    whatsApp,
    instagram,
    facebook,
    email,
    location,
    Discord,
    twitter,
    Skype,
    Linkdin,
    Website,
  } = socialInput;
  const socialContext = useContext(myContext);
  const {
    userdetails, setUserdetails,
    addSocialmedia,
    updatesocialMedia,
    deleteSocialMedia,
    token,
    url,
    userId,
    reload,
  } = socialContext;

  // oncangehandler
  const socialHandleChange = (e) => {
    const { name, value } = e.target;
    setsocialInput({ ...socialInput, [name]: value });
  };

  // Set social id
  useEffect(() => {
    if (userdetails.length > 0) {
      setsocialMediaId(userdetails[0]._id);
      setsocialInput({
        whatsApp: userdetails[0].whatsApp,
        instagram: userdetails[0].instagram,
        facebook: userdetails[0].facebook,
        email: userdetails[0].email,
        location: userdetails[0].location,
        Discord: userdetails[0].Discord,
        twitter: userdetails[0].twitter,
        Skype: userdetails[0].Skype,
        Linkdin: userdetails[0].Linkdin,
        Website: userdetails[0].Website,
      });
    } else {
      setsocialInput({
        whatsApp: "",
        instagram: "",
        facebook: "",
        email: "",
        location: "",
        Discord: "",
        twitter: "",
        Skype: "",
        Linkdin: "",
        Website: "",
      });
    }
  }, [userdetails, token, reload]);

  // submit handler
  const socialSubmit = async (e) => {
    e.preventDefault();
    if (userdetails.length < 1) {
      await addSocialmedia(
        whatsApp,
        instagram,
        facebook,
        email,
        location,
        Discord,
        twitter,
        Skype,
        Linkdin,
        Website
      );
    } else {
      await updatesocialMedia(
        socialMediaId,
        whatsApp,
        instagram,
        facebook,
        email,
        location,
        Discord,
        twitter,
        Skype,
        Linkdin,
        Website
      );
    }

    // deleteSocialMedia(socialMediaId);
  };

  //  fetch socialMedia by  userid
 

  // delete submit
  const deleteSubmit = () => {
    deleteSocialMedia(socialMediaId);
    setsocialInput({
      whatsApp: "",
      instagram: "",
      facebook: "",
      email: "",
      location: "",
      Discord: "",
      twitter: "",
      Skype: "",
      Linkdin: "",
      Website: "",
    });
  };

  return (
    <>
       {token ?(<>   <Box
        sx={{
          display: "flex",
          backgroundColor: "rgb(238,238,238)",
          height: "100vh",
        }}
      >
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
          <Box
            component={"div"}
            sx={{ height: "87vh", backgroundColor: "rgb(255,255,255)" }}
            className="d-flex justify-content-center align-items-center "
          >
            <Box
              onSubmit={socialSubmit}
              sx={{ width: "100%" }}
              component={"form"}
              className=" d-flex justify-content-center align-items-center flex-column gap-4 p-4 border "
            >
              <Typography variant="h4" className=" fw-bold ">
                Social Media
              </Typography>

              <Box width={"90%"} component={"div"} className="d-flex gap-3">
                <TextField
                  size="small"
                  label="Whatsapp"
                  sx={{ width: "50%" }}
                  name="whatsApp"
                  value={whatsApp}
                  onChange={socialHandleChange}
                />
                <TextField
                  size="small"
                  label="Facebook"
                  sx={{ width: "50%" }}
                  onChange={socialHandleChange}
                  name="facebook"
                  value={facebook}
                />
                <TextField
                  size="small"
                  label="Instagram"
                  name="instagram"
                  value={instagram}
                  sx={{ width: "50%" }}
                  onChange={socialHandleChange}
                />
              </Box>

              <Box width={"90%"} component={"div"} className="d-flex gap-3  ">
                <TextField
                  size="small"
                  label="Email"
                  sx={{ width: "50%" }}
                  name="email"
                  value={email}
                  onChange={socialHandleChange}
                />

                <TextField
                  size="small"
                  name="Linkdin"
                  value={Linkdin}
                  label="Linkdin"
                  // placeholder="Linkdin"

                  sx={{ width: "50%", fontWeight: "bold" }}
                  onChange={socialHandleChange}
                />
                <TextField
                  size="small"
                  name="Website"
                  value={Website}
                  label="Website"
                  sx={{ width: "50%" }}
                  onChange={socialHandleChange}
                />
              </Box>
              <Box width={"90%"} component={"div"} className="d-flex gap-3">
                <TextField
                  size="small"
                  name="twitter"
                  value={twitter}
                  label=" twitter"
                  sx={{ width: "50%" }}
                  onChange={socialHandleChange}
                />
                <TextField
                  size="small"
                  name="Skype"
                  value={Skype}
                  label="Skype"
                  sx={{ width: "50%" }}
                  onChange={socialHandleChange}
                />
                <TextField
                  size="small"
                  name="Discord"
                  value={Discord}
                  label="Discord"
                  sx={{ width: "50%" }}
                  onChange={socialHandleChange}
                />
              </Box>
              <Box width={"90%"} component={"div"} className="d-flex gap-3  ">
                <TextField
                  size="small"
                  label="Location"
                  name="location"
                  value={location}
                  sx={{ width: "100%" }}
                  onChange={socialHandleChange}
                />
              </Box>
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
                      Add
                    </Button>
                  )}{" "}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box></>):(<><Login_First/></>)}
   
       
    </>
  );
};

export default SocialMedia;
