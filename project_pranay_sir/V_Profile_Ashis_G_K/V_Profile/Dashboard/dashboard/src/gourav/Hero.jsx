import React, { useContext } from 'react';
import { Box, Typography, Avatar, Card, CardContent, useMediaQuery, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { myContext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

const Hero = () => {
    const navigate = useNavigate();
    const hercontext = useContext(myContext);
    const { user, vcardtheme } = hercontext;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleBack = () => {
        navigate('/company'); // Navigate to '/company' route
    };

    return (
        <Box
            sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '80px 20px',
                textAlign: 'left',
                position: 'relative', // Ensure the button is positioned relative to this container
            }}
        >
            {/* IconButton for navigation */}
            <IconButton
                onClick={handleBack}
                sx={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    color: '#ffffff',
                }}
            >
                <DashboardIcon />
            </IconButton>

            {/* Theme icon and name */}
            <IconButton
                onClick={handleBack}
                sx={{
                    position: 'absolute',
                    top: '20px',
                    right: '50px',
                    color: '#ffffff',
                }}
            >
                <GolfCourseIcon />
                <Typography variant="body1" sx={{ fontSize: '1rem', marginLeft: '5px' }}>
                    {vcardtheme}
                </Typography>
            </IconButton>

            {/* Left side content */}
            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    margin: isSmallScreen ? '20px 0' : '0 20px',
                    padding: isSmallScreen ? '20px 5px' : '5px',
                    backgroundImage: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                }}
            >
                {user && (
                    <CardContent>
                        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                            <Avatar
                                alt={user.name || "Na"}
                                src={user.imgurl || ""}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    marginBottom: 2,
                                }}
                            />
                        </Box>
                        {/* Replace with actual profile data */}
                        <Typography variant="body1" gutterBottom>
                            <strong>Name:</strong> {user.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Email:</strong> {user.email}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Phone:</strong> {user.phone}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Address:</strong> {user.address}
                        </Typography>
                    </CardContent>
                )}
            </Card>

            {/* Right side image */}
            <Box sx={{ flex: 1, textAlign: 'center' }}>
                <img
                    src="/bg.svg"
                    alt="Big Image"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: '400px',
                        borderRadius: '8px',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Hero;
