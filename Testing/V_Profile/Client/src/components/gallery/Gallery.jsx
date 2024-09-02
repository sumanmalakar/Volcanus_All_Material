import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Blog = () => {
  const images = [
    {
      original: 'https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_1280.jpg',
      description: 'Image 1 description',
    },
    {
      original: 'https://cdn.pixabay.com/photo/2024/01/05/16/04/rocks-8489732_1280.jpg',
      description: 'Image 2 description',
    },{
      original: 'https://cdn.pixabay.com/photo/2021/07/23/17/07/volcano-6487743_640.jpg',
      description: 'Image 3 description',
    },
    
  ];

  return (
    <div>
        <h1 className='font-bold text-center text-xl text-white '>Gallery</h1>
      <hr className='w-11 mb-3 bg-pink-400 h-1 m-auto'></hr>

      <Gallery items={images} />
    </div>
  );
};

export default Blog;
