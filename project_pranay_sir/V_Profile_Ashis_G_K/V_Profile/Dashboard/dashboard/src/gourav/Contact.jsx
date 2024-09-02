import React, { useContext, useEffect } from "react";
import { Box, Typography, Grid, Paper, TextField, Button } from "@mui/material";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Language, // Generic website icon assumption
  WhatsApp,
} from "@mui/icons-material"; // Import icons for social media
import { myContext } from "../context/Appcontext";

const Contact = () => {
  const contactContext = useContext(myContext);
  const { userdetails } = contactContext;
  console.log(userdetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <Typography
        variant="h4"
        data-aos="fade-right"
        data-aos-duration="1000"
        gutterBottom
        sx={{ textAlign: "center", marginBottom: "40px" }}
      >
        Contact Information
      </Typography>

      {userdetails.length > 0 ? (<>
        <Grid container spacing={3} justifyContent="center">
        {/* Number Card */}
        <Grid item xs={12} sm={6} data-aos="fade-left" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
              Number
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              {userdetails[0].
whatsApp
 ? userdetails[0].
 whatsApp
  : "#"}
            </Typography>
          </Paper>
        </Grid>

        {/* Email Card */}
        <Grid item xs={12} sm={6} data-aos="fade-left" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
              Email
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              {userdetails[0].email ? userdetails[0].email : "#"}
            </Typography>
          </Paper>
        </Grid>

        {/* Location Card */}
        <Grid
          item
          xs={12}
          data-aos="fade-right"
          data-aos-duration="1000"
          sm={6}
        >
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
             Address
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              {userdetails[0].location ? userdetails[0].location : "#"}
            </Typography>
          </Paper>
        </Grid>

        {/* Social Media Cards */}
        {userdetails.length > 0 ? (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Paper
                variant="outlined"
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
                  color: "#1a1a1a",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Social Media
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                  {/* Facebook */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].facebook ? userdetails[0].facebook : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#3b5998",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Facebook fontSize="large" />
                        <Typography variant="subtitle2">Facebook</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Instagram */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].instagram
                          ? userdetails[0].instagram
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#c32aa3",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Instagram fontSize="large" />
                        <Typography variant="subtitle2">Instagram</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* LinkedIn */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].Linkdin ? userdetails[0].Linkdin : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#0077b5",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <LinkedIn fontSize="large" />
                        <Typography variant="subtitle2">LinkedIn</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Twitter */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].twitter ? userdetails[0].twitter : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#1da1f2",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Twitter fontSize="large" />
                        <Typography variant="subtitle2">Twitter</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Website */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].Website ? userdetails[0].Website : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#4CAF50",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Language fontSize="large" />
                        <Typography variant="subtitle2">Website</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* WhatsApp */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].whatsApp
                          ? `https://wa.me/${userdetails[0].whatsApp}`
                          : "https://wa.me/xxxxxxxxxx"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#25D366",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <WhatsApp fontSize="large" />
                        <Typography variant="subtitle2">WhatsApp</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Discord */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        userdetails[0].Discord ? userdetails[0].Discord : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#7289DA",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fab fa-discord"
                          style={{ fontSize: "30px" }}
                        ></i>
                        <Typography variant="subtitle2">Discord</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Skype */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={userdetails[0].Skype ? userdetails[0].Skype : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#00AFF0",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fab fa-skype"
                          style={{ fontSize: "30px" }}
                        ></i>
                        <Typography variant="subtitle2">Skype</Typography>
                      </Paper>
                    </a>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </>
        ) : (
          <>
            <h1>Data not available</h1>
          </>
        )}

        {/* Contact Form */}
        <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Dark gradient for Paper background
              color: "#1a1a1a",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", marginBottom: "20px", color: "white" }}
            >
              Contact Us
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>

                {/* Number and Email Fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Number"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ backgroundColor: "#2c5364", color: "#ffffff" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      </>) : (<>   
       <Grid container spacing={3} justifyContent="center">
        {/* Number Card */}
        <Grid item xs={12} sm={6} data-aos="fade-left" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
              Number
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
           Not Vailable
            </Typography>
          </Paper>
        </Grid>

        {/* Email Card */}
        <Grid item xs={12} sm={6} data-aos="fade-left" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
              Email
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
                  Not Vailable
            </Typography>
          </Paper>
        </Grid>

        {/* Location Card */}
        <Grid
          item
          xs={12}
          data-aos="fade-right"
          data-aos-duration="1000"
          sm={6}
        >
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
              color: "#ffffff",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
             Address
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
                   Not Vailable
            </Typography>
          </Paper>
        </Grid>

        {/* Social Media Cards */}
        
        
            <Grid
              item
              xs={12}
              sm={6}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Paper
                variant="outlined"
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #0F2027, #203A43, #2C5364)",
                  color: "#1a1a1a",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "white",
                  }}
                >
                  Social Media
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                  {/* Facebook */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#3b5998",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Facebook fontSize="large" />
                        <Typography variant="subtitle2">Facebook</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Instagram */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#c32aa3",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Instagram fontSize="large" />
                        <Typography variant="subtitle2">Instagram</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* LinkedIn */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                       "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#0077b5",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <LinkedIn fontSize="large" />
                        <Typography variant="subtitle2">LinkedIn</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Twitter */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={"#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#1da1f2",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Twitter fontSize="large" />
                        <Typography variant="subtitle2">Twitter</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Website */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                       "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#4CAF50",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Language fontSize="large" />
                        <Typography variant="subtitle2">Website</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* WhatsApp */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                         "https://wa.me/xxxxxxxxxx"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#25D366",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <WhatsApp fontSize="large" />
                        <Typography variant="subtitle2">WhatsApp</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Discord */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href={
                        "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#7289DA",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fab fa-discord"
                          style={{ fontSize: "30px" }}
                        ></i>
                        <Typography variant="subtitle2">Discord</Typography>
                      </Paper>
                    </a>
                  </Grid>

                  {/* Skype */}
                  <Grid item xs={4} sm={3}>
                    <a
                      href= "#"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Paper
                        variant="outlined"
                        sx={{
                          backgroundColor: "#00AFF0",
                          color: "#ffffff",
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fab fa-skype"
                          style={{ fontSize: "30px" }}
                        ></i>
                        <Typography variant="subtitle2">Skype</Typography>
                      </Paper>
                    </a>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
        

        {/* Contact Form */}
        <Grid item xs={12} sm={6} data-aos="fade-up" data-aos-duration="1000">
          <Paper
            variant="outlined"
            sx={{
              backgroundImage:
                "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Dark gradient for Paper background
              color: "#1a1a1a",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", marginBottom: "20px", color: "white" }}
            >
              Contact Us
            </Typography>

            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Grid container spacing={2}>
                {/* Name Field */}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>

                {/* Number and Email Fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Number"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>

                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    InputProps={{
                      sx: { backgroundColor: "#dfe6e9" },
                    }}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ backgroundColor: "#2c5364", color: "#ffffff" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid></>)}
     


    </Box>
  );
};

export default Contact;
