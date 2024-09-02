/* eslint-disable no-unused-vars */
import React from 'react'

const Blog = () => {
  return (
    <>
        <h1 className='text-center text-xl font-bold p-3'> Blog</h1>
        <div className=" flex pb-4 overflow-hidden m-auto">
                {/* Website Icon */}
            <div data-aos="fade-right" data-aos-duration="1000" className='border-y-4 border-yellow-500   rounded-xl m-3  shadow-2xl hover:scale-105 text-center '>
                <img className="website-icon m-auto rounded-t-lg flex h-36" src='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg' />
                <h1 className='font-semibold '>Survey</h1>
                <p className='text-xs mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim illo pariatur dignissimos quibusdam eveniet iusto porro?</p>
            </div>


            <div data-aos="fade-left" data-aos-duration="1000" className='border-y-4 border-yellow-500  rounded-xl m-3  shadow-2xl hover:scale-105 text-center '>
                <img className="website-icon m-auto rounded-t-lg flex h-36" src='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg' />
                <h1 className='font-semibold'>Survey</h1>
                <p className='text-xs mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim illo pariatur dignissimos quibusdam eveniet iusto porro?</p>
            </div>

        </div>
    
    </>
  )
}

export default Blog
