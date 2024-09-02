import React, { useContext, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Card } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import { myContext } from '../context/Appcontext';

const Payment = () => {
  const paymentContext = useContext(myContext);
  const { paymentDetails } = paymentContext;
  console.log(paymentDetails);

  useEffect(() => {
    AOS.init(); // Initialize AOS without once option
  }, []);

  return (
    <>
      {paymentDetails.length > 0 ? (
        <>
          <Box
            sx={{
              backgroundColor: '#1a1a1a', // Dark background color
              color: '#ffffff',
              minHeight: '100vh', // Full height of viewport
              padding: '80px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              data-aos="fade-up"
              data-aos-duration="1000"
              gutterBottom
              sx={{ textAlign: 'center', marginBottom: '40px' }}
            >
              Payment Information
            </Typography>

            {/* Bank Details Card */}
            <Paper
              variant="outlined"
              sx={{
                backgroundImage:
                  'linear-gradient(to right, #0F2027, #203A43, #2C5364)', // Darker gradient background
                color: '#ffffff',
                width: '90%',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Typography variant="h5" gutterBottom>
                Bank Details
              </Typography>
              <AccountBalanceIcon fontSize="large" />
              <Typography variant="body1" gutterBottom>
                Bank Name: {paymentDetails[0].bank || 'not Available'}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Account Number:{' '}
                {paymentDetails[0].accountNumber || 'XXXXXXXX'}
              </Typography>
              <Typography variant="body1" gutterBottom>
                IFSC Code: {paymentDetails[0].ifscCode || 'XXXX0000'}
              </Typography>
            </Paper>

            {/* QR Code and Status Card */}
            <Paper
              variant="outlined"
              sx={{
                backgroundImage:
                  'linear-gradient(to right, #0F2027, #203A43, #2C5364)', // Darker gradient background
                color: '#ffffff',
                width: '90%',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Typography variant="h5" gutterBottom>
              UPI &  QR Code 
              </Typography>
              {paymentDetails[0].qrcode ? (
                <img
                  src={paymentDetails[0].qrcode}
                  alt="QR Code"
                  style={{ width: '200px', height: '200px', marginBottom: '10px' }}
                />
              ) : (
                <>
                  <QrCodeIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    QR Code: Not Available
                  </Typography>
                </>
              )}
              <Typography variant="body1" gutterBottom>
                UPI: {paymentDetails[0].upi || 'Not Available'}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Terms & Conditions Apply
              </Typography>
            </Paper>

            {/* Payment Methods */}
            <Grid container spacing={6} justifyContent="center" sx={{ width: '90%' }}>
              {/* Paytm */}
              <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
                <Card
                  variant="outlined"
                  sx={{
                    backgroundImage:
                      'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <MonetizationOnIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    Paytm
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {paymentDetails[0].paytm || 'Not Available'}
                  </Typography>
                </Card>
              </Grid>

              {/* PhonePe */}
              <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
                <Card
                  variant="outlined"
                  sx={{
                    backgroundImage:
                      'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <SmartphoneIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    PhonePe
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {paymentDetails[0].phonePe || 'Not Available'}
                  </Typography>
                </Card>
              </Grid>

              {/* Google Pay */}
              <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
                <Card
                  variant="outlined"
                  sx={{
                    backgroundImage:
                      'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <PaymentIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    Google Pay
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {paymentDetails[0].googlePay || 'Not Available'}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              backgroundColor: '#1a1a1a', // Dark background color
              color: '#ffffff',
              minHeight: '100vh', // Full height of viewport
              padding: '80px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              data-aos="fade-up"
              data-aos-duration="1000"
              gutterBottom
              sx={{ textAlign: 'center', marginBottom: '40px' }}
            >
              Payment Information
            </Typography>

            {/* Bank Details Card */}
            <Paper
              variant="outlined"
              sx={{
                backgroundImage:
                  'linear-gradient(to right, #0F2027, #203A43, #2C5364)', // Darker gradient background
                color: '#ffffff',
                width: '90%',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Typography variant="h5" gutterBottom>
                Bank Details
              </Typography>
              <AccountBalanceIcon fontSize="large" />
              <Typography variant="body1" gutterBottom>
                Bank Name: {paymentDetails.bank || 'not Available'}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Account Number: XXXXXXXX
              </Typography>
              <Typography variant="body1" gutterBottom>
                IFSC Code: XXXX0000
              </Typography>
            </Paper>

            {/* QR Code and Status Card */}
            <Paper
              variant="outlined"
              sx={{
                backgroundImage:
                  'linear-gradient(to right, #0F2027, #203A43, #2C5364)', // Darker gradient background
                color: '#ffffff',
                width: '90%',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Typography variant="h5" gutterBottom>
                QR Code and Status
              </Typography>
              <QrCodeIcon fontSize="large" />

              <Typography variant="body1" gutterBottom>
               UPI: Not Available
              </Typography>
              <Typography variant="body1" gutterBottom>
                Terms & Conditions Apply
              </Typography>
            </Paper>

            {/* Payment Methods */}
            <Grid container spacing={6} justifyContent="center" sx={{ width: '90%' }}>
              {/* Paytm */}
              <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
                <Card
                  variant="outlined"
                  sx={{
                    backgroundImage:
                      'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <MonetizationOnIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    Paytm
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Not Available
                  </Typography>
                </Card>
              </Grid>

              {/* PhonePe */}
              <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
                <Card
                  variant="outlined"
                  sx={{
                    backgroundImage:
                      'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <SmartphoneIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    PhonePe
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Not Available
                  </Typography>
                </Card>
              </Grid>

              {/* Google Pay */}
              <Grid item xs={12} sm={6} md={4} data-aos="flip-right" data-aos-duration="1000">
                <Card
                  variant="outlined"
                  sx={{
                    backgroundImage:
                      'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
                    color: '#ffffff',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <PaymentIcon fontSize="large" />
                  <Typography variant="body1" gutterBottom>
                    Google Pay
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Not Available
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Payment;
