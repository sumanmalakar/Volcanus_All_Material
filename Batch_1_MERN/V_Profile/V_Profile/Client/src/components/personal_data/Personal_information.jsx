/* eslint-disable no-unused-vars */
// PersonalInformation.js
import React from 'react';
// import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

const PersonalInformation = () => {
  return (
    <>
    <div className="flex items-center justify-center ">
      <hr className="border-b-2 border-yellow-600 w-full mr-4" />
      <h1 className="font-bold text-xl text-white">Contact</h1>
      <hr className="border-b-2 border-yellow-600 w-full ml-4" />
    </div>
      <div className="container w-full mt-5 ">
        <div className="row flex justify-evenly">
          <div data-aos="fade-right" data-aos-duration="1000" className="email flex text-white p-2 shadow-xl rounded-lg hover:bg-white hover:scale-105 transition duration-[0.3s] relative hover:cursor-pointer hover:text-black">
            <FontAwesomeIcon icon={faEnvelope} className=" text-3xl mr-2 font-size " />
            <div>
            <p className=' text-sm'>E-mail address</p>
            <p className='font-bold  text-sm'>jackie@gmail.com</p>
            </div>
            </div>
            
          <div data-aos="fade-left" data-aos-duration="1000" className="email flex text-white p-2 shadow-xl rounded-lg hover:bg-white hover:scale-105 transition duration-[0.3s] relative hover:cursor-pointer hover:text-black">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-3xl" />
            <div>
            <p className=' text-sm font-semibold'>Mobile number</p>
            <p className=' text-sm font-semibold'>+91 78541254789</p>
            </div>
              </div>

        </div>
        <div className="row flex justify-evenly mt-10">
          <div data-aos="fade-right" data-aos-duration="1000" className="email flex text-white p-2 shadow-xl rounded-lg hover:bg-white hover:scale-105 transition duration-[0.3s] relative hover:cursor-pointer hover:text-black">
            <FontAwesomeIcon icon={faBirthdayCake} className=" text-3xl mr-2 font-size " />
            <div>
            <p className=' text-sm'>Date of Birth</p>
            <p className='font-bold  text-sm'>12th June,1990</p>
            </div>
            </div>
            
          <div data-aos="fade-left" data-aos-duration="1000" className="email flex text-white p-2 shadow-xl rounded-lg hover:bg-white hover:scale-105 transition duration-[0.3s] relative hover:cursor-pointer hover:text-black">
            <FontAwesomeIcon icon={faLocation} className="mr-2 text-3xl" />
            <div>
            <p className=' text-sm font-semibold'>Location</p>
            <p className=' text-sm font-semibold'>New York,USA</p>
            </div>
              </div>

        </div>
        
            

      </div>

      
    </>
  );
};

export default PersonalInformation;