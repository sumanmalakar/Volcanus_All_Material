import React, { useState, useEffect, useContext
} from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import BusinessIcon from "@mui/icons-material/Business";
import ShortTextIcon from "@mui/icons-material/ShortText";
import PhotoIcon from "@mui/icons-material/Photo";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import { myContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";


const Appointment = () => {
  const navigate = useNavigate()
  const appointmentcontext = useContext(myContext);
  const { appointmentDetails, companyDetails } = appointmentcontext;

  // Function to format date as MM/DD/YYYY
  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Function to format time as 12-hour format
  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    let formattedHours = parseInt(hours);
    const ampm = formattedHours >= 12 ? 'PM' : 'AM';
    formattedHours = formattedHours % 12 || 12; // Handle midnight (0 hours) as 12 AM
    const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
    return formattedTime;
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS without once option
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS after rendering new content
  }, [appointmentDetails]); // Refresh if appointments change

  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a", // Dark background color
        color: "#ffffff",
        minHeight: "100vh", // Full height of viewport
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        Appointments
      </Typography>

      {/* Date Input */}
      <Paper
        variant="outlined"
        sx={{
          width: "90%",
          backgroundImage:
            "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Dark gradient for Paper background
          color: "#ffffff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
          Select Date
        </Typography>
        <input
          type="date"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Dark gradient for Paper background
            color: "#ffffff",
            border: "none",
            outline: "none",
            width: "100%",
            padding: "10px 15px",
            marginTop: "10px",
          }}
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </Paper>

      {/* Available Appointments */}
      <Grid container spacing={3} justifyContent="center">

        {appointmentDetails.length > 0 ? (
          appointmentDetails.map((appointment) => (
            <Grid
              key={appointment.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Paper
                variant="outlined"
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Use a different gradient based on index
                  color: "#ffffff",
                  minHeight: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "20px",
                }}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                  {formatTime(appointment.time)}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                  {formatDate(appointment.date)}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Paper
              variant="outlined"
              sx={{
                backgroundImage:
                  "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Use a different gradient based on index
                color: "#ffffff",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
              }}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Typography variant="h5">
              No Appointment added yet
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: "10px" }}>
             
              You need to add your Appointment to showcase them here.
              </Typography>
           
              <Button onClick={()=>navigate("/appointment")} sx={{color:"white"}} variant="outlined"> Add Appoinment</Button>
            </Paper>
          </Grid>
        )}

      </Grid>

      {/* Company Details */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", marginTop: "40px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Company Details
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{
          backgroundImage:
            "linear-gradient(to right, #0F2027, #203A43, #2C5364)", // Dark blue gradient background
          color: "#ffffff",
          width: "80%",
          minWidth: "300px",
          marginTop: "40px",
          padding: "20px",
          textAlign: "center",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {companyDetails.length > 0 ? (
          <>
            <Grid item xs={12} sm={4}>
              <BusinessIcon fontSize="large" />
              <Typography variant="body1" gutterBottom>
                {companyDetails[0].name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ShortTextIcon fontSize="large" />
              <Typography variant="body1" gutterBottom>
                {companyDetails[0].tagline}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <PhotoIcon fontSize="large" />
              <Typography variant="body1" gutterBottom>
                {companyDetails[0].logo}
              </Typography>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Company details not available.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Appointment;
