// Footer.js

import { useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS and configure options
  }, []);

  return (
    <div
      className="w-75 py-4 bg-dark m-auto text-light flex-column d-flex align-items-center"
      data-aos="fade-up"
    >
      <Typography variant="body1" color="inherit">
        &copy; 2024 Your Company | All rights reserved
      </Typography>
      <div>
        <IconButton
          color="inherit"
          aria-label="facebook"
          onClick={() => window.open("https://www.facebook.com/")}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="instagram"
          onClick={() => window.open("https://www.instagram.com/")}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="linkedin"
          onClick={() => window.open("https://www.linkedin.com/")}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <LinkedIn />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
