import React, { useContext, useEffect } from "react";
import { myContext } from "../context/Appcontext";
import { LocationCity, Phone, Email } from "@mui/icons-material";
import { Box, TextField, TextareaAutosize, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const contactContext = useContext(myContext);
  const { user, userdetails } = contactContext;

  // Destructure location and email from userdetails if available
  const { location, email } = userdetails || {};

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      easing: "ease-in-out", // easing function for animation
      once: true, // whether animation should only happen once
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [user, userdetails]);

  return (
    <div className="w-75 py-1 bg-dark m-auto text-light flex-column d-flex align-items-center">
      <div
        style={{ width: "95%" }}
        className="bg-black p-3 d-flex flex-column align-items-center justify-content-center"
        data-aos="fade-up"
      >
        {/* heading */}
        <h2 className="py-3">
          ------{"<"}{" "}
          <span style={{ color: "rgb(207,241,30)" }}>Get In Touch</span> {">"}
          ------
        </h2>
        <div className="d-flex p-3 w-100 gap-5">
          <div style={{ width: "60%", height: "20rem" }} className="image">
            <img
              style={{ width: "100%" }}
              src="https://cdn.pixabay.com/photo/2024/05/19/11/57/ai-generated-8772394_1280.png"
              alt=""
            />
          </div>
          <div className="contactus w-50">
            <h3>Contact Us</h3>
            <Box component="form" sx={{ width: "100%", margin: "auto" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Name</label>
                <TextField
                  id="name"
                  placeholder="Enter Your Name"
                  variant="filled"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: "#333",
                      color: "#fff",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#444",
                      },
                      "&:focus": {
                        backgroundColor: "#555",
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email</label>
                <TextField
                  id="email"
                  placeholder="Enter Your Valid Email"
                  variant="filled"
                  fullWidth
                  value={email || ""}
                  InputProps={{
                    sx: {
                      backgroundColor: "#333",
                      color: "#fff",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#444",
                      },
                      "&:focus": {
                        backgroundColor: "#555",
                      },
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="message">Message</label>
                <TextareaAutosize
                  id="message"
                  aria-label="empty textarea"
                  placeholder="Text Here..."
                  minRows={4}
                  style={{
                    width: "100%",
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#444",
                    },
                    "&:focus": {
                      backgroundColor: "#555",
                    },
                  }}
                />
              </div>
              <div
                className="d-flex align-items-center gap-2"
                style={{ marginBottom: "1rem" }}
              >
                <input
                  style={{ width: "1.2rem", height: "1.2rem" }}
                  type="checkbox"
                  id="terms"
                  name="terms"
                />
                <label htmlFor="terms">
                  I accept the{" "}
                  <span className="text-danger">terms of service</span>
                </label>
              </div>
              <div
                className="d-flex align-items-center gap-2"
                style={{ marginBottom: "1rem" }}
              >
                <Button variant="contained" color="warning" fullWidth>
                  Submit
                </Button>
              </div>
            </Box>
          </div>
        </div>

        <div className="d-flex justify-content-around align-items-center w-100 my-3">
          {/* Call Us Section */}
          <div
            style={{
              width: "30%",
              height: "8rem",
              borderRadius: "1rem",
            }}
            className="d-flex flex-column bg-dark justify-content-center px-3 gap-2"
            data-aos="fade-right"
          >
            <div
              style={{ color: "rgb(207,241,30)" }}
              className="d-flex gap-2 fw-bold"
            >
              <Phone />
              CALL US
            </div>
            <div>
              <h6>{user.phone}</h6>
            </div>
          </div>

          {/* Location Section */}
          <div
            style={{
              width: "30%",
              height: "8rem",
              borderRadius: "1rem",
            }}
            className="d-flex flex-column bg-dark justify-content-center px-3 gap-2"
            data-aos="fade-up"
          >
            <div
              style={{ color: "rgb(207,241,30)" }}
              className="d-flex gap-2 fw-bold"
            >
              <LocationCity />
              LOCATION
            </div>
            <div>
              <h6>{user.address}</h6>
            </div>
          </div>

          {/* Email Section */}
          <div
            style={{
              width: "30%",
              height: "8rem",
              borderRadius: "1rem",
            }}
            className="d-flex flex-column bg-dark justify-content-center px-3 gap-2"
            data-aos="fade-left"
          >
            <div
              style={{ color: "rgb(207,241,30)" }}
              className="d-flex gap-2 fw-bold"
            >
              <Email />
              EMAIL
            </div>
            <div>
              <h6>{user.email}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
