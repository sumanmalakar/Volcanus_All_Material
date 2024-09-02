import React, { useContext, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia,Button } from '@mui/material';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // AOS CSS for animations
import { myContext } from '../context/Appcontext';
import { RoomService, RestaurantMenu, LocalShipping, Event } from '@mui/icons-material'; // Import icons for services
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {

  const navigate = useNavigate()
  const { servicedetails } = useContext(myContext);

  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with once option
  }, []);

  // Function to render icon based on service type
  const renderServiceIcon = (serviceType) => {
    switch (serviceType) {
      case 'Room Service':
        return <RoomService fontSize="large" sx={{ color: '#ffffff' }} />;
      case 'Restaurant Menu':
        return <RestaurantMenu fontSize="large" sx={{ color: '#ffffff' }} />;
      case 'Local Shipping':
        return <LocalShipping fontSize="large" sx={{ color: '#ffffff' }} />;
      case 'Event Management':
        return <Event fontSize="large" sx={{ color: '#ffffff' }} />;
      default:
        // Array of icons to choose from if serviceType doesn't match
        const randomIcons = [
          <RoomService fontSize="large" sx={{ color: '#ffffff' }} />,
          <RestaurantMenu fontSize="large" sx={{ color: '#ffffff' }} />,
          <LocalShipping fontSize="large" sx={{ color: '#ffffff' }} />,
          <Event fontSize="large" sx={{ color: '#ffffff' }} />,
        ];
        const randomIndex = Math.floor(Math.random() * randomIcons.length);
        return randomIcons[randomIndex];
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a', // Dark background
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        data-aos="fade-up"
        data-aos-duration="1000"
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', marginBottom: '40px', color: '#ffffff' }}
      >
        Our Services
      </Typography>

      {servicedetails.length === 0 && (
        <Card
          data-aos="fade-up"
          data-aos-duration="1000"
          sx={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#203A43',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ marginBottom: '20px' }}>
            No services added yet
          </Typography>
          <Typography variant="body1">
            You need to add your services to showcase them here.
          </Typography>
          <Button onClick={()=>navigate("/service")} variant='outlined' sx={{marginTop:"10px" , color:"white"}}>Add services</Button>
        </Card>
      )}

      {servicedetails.length > 0 && (
        <Grid container spacing={3} justifyContent="center" sx={{ width: '100%', padding: '0 20px' }}>
          {servicedetails.map((service) => (
            <Grid key={service.id} item xs={12} sm={6} md={4}>
              <Card
                data-aos="fade-up"
                data-aos-duration="1000"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#0F2027', // Background color for the card
                    height: '100%', // Ensure card fills the grid item
                    borderRadius: '8px', // Match Card's borderRadius
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    sx={{
                      objectFit: 'cover',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '150px', // Decreased height
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      borderBottomLeftRadius: '8px',
                      borderBottomRightRadius: '8px',
                    }}
                  >
                    {service.serviceImage ? (
                      <img src={service.serviceImage} alt={service.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    ) : (
                      renderServiceIcon(service.title)
                    )}
                  </CardMedia>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      backgroundColor: '#203A43', // Background color for content area
                      borderBottomLeftRadius: '8px',
                      borderBottomRightRadius: '8px',
                      textAlign: 'center',
                      color: '#ffffff', // White text
                      paddingTop: '10px', // Adjust as needed
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginTop: '10px' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ServicesPage;
