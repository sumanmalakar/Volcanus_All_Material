import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        marginTop: 'auto', // Pushes footer to bottom of viewport
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        &copy; 2024 Your Company. All rights reserved.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <IconButton
            component={Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            component={Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
