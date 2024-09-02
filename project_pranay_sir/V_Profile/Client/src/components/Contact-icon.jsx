import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import {  faWhatsapp, faFacebook, faInstagram, faTwitter, faSkype, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AppContext } from '../context/App_context';

const Contact_Icon = () => {
  
  const {Social}=useContext(AppContext)
  console.log("social media acoounts===",Social)
  

  

  return (
    <div className="flex flex-wrap mt-10 m-0 container mx-auto lg:justify-center items-center overflow-hidden ml-0 rounded-full  pb-8">
      
      {/* WhatsApp icon */}
      {Social?.whatsApp && (
        <a
          href={`tel:${Social?.whatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-green-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: "0 4px 5px 5px rgba(0, 0, 0, 0.4)" }}
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        </a>
      )}
  
      {/* Mail icon */}
      {Social?.email && (
        <a
          href={`mailto:${Social?.email}`}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-red-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        </a>
      )}
  
      {/* Facebook icon */}
      {Social?.facebook && (
        <a
          href={Social?.facebook}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
        </a>
      )}
  
      {/* Instagram icon */}
      {/* Instagram icon */}
      {Social?.instagram && (
        <a
          href={Social?.instagram}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-pink-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
      )}

      {/* Twitter icon */}
      {Social?.twitter && (
        <a
          href={Social?.twitter}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </a>
      )}

      {/* Skype icon */}
      {Social?.Skype && (
        <a
          href={Social?.Skype}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faSkype} className="text-xl" />
        </a>
      )}

      {/* Discord icon */}
      {Social?.Discord && (
        <a
          href={Social?.Discord}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faDiscord} className="text-xl" />
        </a>
      )}

      {/* LinkedIn icon */}
      {Social?.Linkedin && (
        <a
          href={Social?.Linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
      )}

      {/* Website icon */}
      {Social?.Website && (
        <a
          href={Social?.Website}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        </a>
      )}

      {/* Location icon */}
      {Social?.location && (
        <a
          href={Social?.location}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="cursor-pointer text-white hover:scale-105 transition duration-[0.3s] hover:text-blue-700 text-center ml-3 border-none bg-emerald-850 rounded-lg shadow-md p-2"
          style={{ boxShadow: '0 4px 5px 5px rgba(0, 0, 0, 0.4)' }}
        >
          <FontAwesomeIcon icon={faLocation} className="text-xl" />
        </a>
      )}
      
    </div>
  );

};

export default Contact_Icon;
