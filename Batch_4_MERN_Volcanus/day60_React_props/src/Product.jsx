import React from 'react'

const Product = ({title,price,description,imgsrc}) => {
  return (
    <>
    <h1>{title}</h1>
    <img src={imgsrc} alt="" />
    </>
  )
}

export default Product