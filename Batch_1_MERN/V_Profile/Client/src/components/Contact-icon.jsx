/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact_Icon = () => {


  const openWhatsApp = (number) => {
    // Replace with your actual WhatsApp functionality
    alert('Opening WhatsApp with number: ' + number);
  };


  const openMail = (mailTo) => {
    // Replace with your actual mail functionality
    window.location.href = mailTo;
  };

  const openFacebook = () => {
    // Replace with your actual Facebook functionality
    alert('Opening Facebook');
  };

  const openInstagram = () => {
    // Replace with your actual Instagram functionality
    alert('Opening Instagram');
  };

  const openTwitter = () => {
    // Replace 'your_twitter_username' with your actual Twitter username
    const twitterProfileUrl = `https://twitter.com/your_twitter_username`;
    window.open(twitterProfileUrl, '_blank');
  };

  return (
    <div  className="flex items-center overflow-hidden ml-0 mt-6 rounded-full space-x-4 sm:justify-start  m-auto pb-8">
      
      {/* WhatsApp icon */}
      <div data-aos="flip-left" data-aos-duration="1000" className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s]  hover:text-green-700  text-center ml-3 border-none  bg-emerald-850 rounded-lg shadow-md  p-2" style={{boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)'}}>
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" onClick={() => openWhatsApp('+9893785834')} />
      </div>
  
      {/* Mail icon */}
      <div data-aos="flip-left" data-aos-duration="1000" className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s]  hover:text-red-700 text-center ml-3 border-none   bg-emerald-850 rounded-lg shadow-md  p-2" style={{boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)'}}>
        <FontAwesomeIcon icon={faEnvelope} className="text-xl" onClick={() => openMail('mailto:komalprajapat267@mail.com')} />
      </div>
  
      {/* Facebook icon */}
      <div data-aos="flip-left" data-aos-duration="1000" className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s]  hover:text-blue-700 text-center ml-3 border-none  bg-emerald-850 rounded-lg shadow-md p-2" style={{boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)'}}>
        <FontAwesomeIcon icon={faFacebook} className="text-xl" onClick={() => openFacebook()} />
      </div>
  
      {/* Instagram icon */}
      <div data-aos="flip-left" data-aos-duration="1000" className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s]  hover:text-pink-700 text-center ml-3 border-none  bg-emerald-850 rounded-lg shadow-md  p-2" style={{boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)'}}>
        <FontAwesomeIcon icon={faInstagram} className="text-xl" onClick={() => openInstagram()} />
      </div>
  
      <div data-aos="flip-left" data-aos-duration="1000" className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s]  hover:text-blue-700 text-center ml-3 border-none  bg-emerald-850 rounded-lg shadow-md  p-2" style={{boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)'}}>
        <FontAwesomeIcon icon={faTwitter} className="text-xl" onClick={() => openTwitter()} />
      </div>
    </div>
  );
  

};

export default Contact_Icon;
