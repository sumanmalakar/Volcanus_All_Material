/* eslint-disable no-unused-vars */
import React from 'react'

const Gallery = () => {
  return (
  <>
<div className="flex flex-col bg-white m-auto p-auto">
<h1 className="flex justify-center p-3 m-3  font-bold text-2xl text-emerald-900">Gallery</h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap " >
          <div className="inline-block px-3">
            <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src='https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg'/>
          </div>
          <div className="inline-block px-3">
            <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src='https://cdn.pixabay.com/photo/2017/06/12/03/33/seo-2394237_1280.jpg'/>
          </div>
          <div className="inline-block px-3">
            <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src='https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_640.jpg'
            />
          </div>
          <div className="inline-block px-3">
            <img className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" src='https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_640.png'
            />
          </div>
          
          
          
        </div>
      </div>
</div>

  </>
  )
}

export default Gallery
