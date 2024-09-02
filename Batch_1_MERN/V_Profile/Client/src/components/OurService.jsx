/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const OurService = () => {
  return (

     <>
    <h1 className='text-center font-bold p-4 text-xl  text-emerald-900'>Our Services</h1>
    <div className="flex justify-center overflow-hidden pb-4 m-2">
   

        {/* Website Icon */}
        <div data-aos="fade-right" data-aos-duration="1000" className='w-full h-full border rounded-xl m-3 p-1 shadow-2xl  shadow-black hover:scale-105 transition duration-[0.3s] ease-in-out '>
          <div className="  m-auto text-4xl rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faFaceSmile} />
          </div>

          {/* Web Development */}
          
          <div className=" text-center  ">
            <h1 className='font-bold'>Web Development</h1>
            <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
            Lorem ipsum dolor sit amet.</p>
          </div>
      </div>


      <div data-aos="fade-left" data-aos-duration="1000" className='w-full h-full border rounded-xl m-3 p-1 shadow-2xl shadow-black hover:scale-105 transition duration-[0.3s] ease-in-out '>
        <div className="website-icon text-4xl m-auto rounded-lg flex items-center justify-center ">
          <FontAwesomeIcon icon={faGlobe} className="text-orange-300" />
        </div>

        {/* Web Development */}
        
        <div className="   text-center  ">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      </div>

      
    </>
    
  )
}

export default OurService
