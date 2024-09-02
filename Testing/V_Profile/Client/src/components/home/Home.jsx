/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Contact_Icon from '../Contact-icon';

import Personal_information from '../personal_data/Personal_information';
import Service from '../Service';
import { AppContext } from '../../context/App_context';

const Home = () => {
  const {user}=useContext(AppContext)

  // console.log("jai pubg part 2",user);
  return (
    <div className='relative  bg-emerald-900'>
      <img
        src='https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_640.jpg'
        alt='COVER-PAGE'
        className='h-[200px] w-full'
      />
      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='fill-current text-emerald-900'
        >
          <path
            fillOpacity='1'
            d='M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,170.7C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div  className='absolute top-10 left-3 right-3 transform'>
        {/* Circle */}
        <div data-aos="fade-up" data-aos-duration="1000" className='relative h-40 w-40'>
          <div  className='h-28 w-28 rounded-full bg-transparent border-4 border-yellow-500 absolute top-28 left-14 transform -translate-x-1/2 -translate-y-1/2'>
            <img
              src='https://cdn.pixabay.com/photo/2023/06/16/15/10/man-ai-8068201_640.jpg'
              alt='Profile'
              className='h-27 w-27 rounded-full'
            />
          </div>
        </div>
        <h1 data-aos="fade-right" data-aos-duration="1500" className='text-yellow-500 font-bold text-xl mt-4 ml-3'>{user?.name}</h1>
        <h3 data-aos="fade-right" data-aos-duration="1500" className='text-white  text-xs mt-1 ml-3'>Email:{user?.email}</h3>
        <h3 data-aos="fade-right" data-aos-duration="1500" className='text-white  text-xs mt-1 ml-3'>Number:{user?.phone}</h3>
        <h3 data-aos="fade-right" data-aos-duration="1500" className='text-white  text-xs mt-1 ml-3'>Address:{user?.address}</h3>     
        <div className=' text-white p-2 shadow-lg hover:scale-105 transition duration-[0.3s] rounded-lg w-[90%]'>
        <p data-aos="fade-right" data-aos-duration="1500" className='text-xs mt-3 ml-3'>Description:{user?.discription}</p>
        </div>
        <Contact_Icon />
        
        <Personal_information/>
        

      {/* <Service /> */}
      </div>
      
    </div>
  );
};

export default Home;
