import React, { useContext } from 'react';
import { Button, Container } from '@mui/material';
import Footer from './Footer';
import Hero from './Hero';
import Appointment from './Appointment';
import Payment from './Payment';
import ServicesPage from './Services';
import Contact from './Contact';
import { myContext } from '../context/Appcontext';
import Login from '../components/Login';
// import { Login } from '@mui/icons-material';
// Login



const Home = () => {
    const homecontext = useContext(myContext)
    const {token} = homecontext
    // console.log(token,"lol")
  return (
    <>
    {token!="" ?(<Container className='cl' maxWidth="md">

<Hero/>
{/* Other components or sections */}

<Appointment/>
<Payment/>
<ServicesPage/>
<Contact/>
<Footer/>
</Container>):( <Login/>)}
    </>
 
    
  );
};

export default Home;
