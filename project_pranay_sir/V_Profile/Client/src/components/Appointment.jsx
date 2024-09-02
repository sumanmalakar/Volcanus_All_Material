/* eslint-disable no-unused-vars */
import React from 'react'

const Appointment = () => {
  return (
    <>
      <div className='container bg-emerald-900 pb-5'>
        <div className='flex items-center justify-center mt-4'>
            <hr className="border-b-2 border-yellow-600 w-20 mr-2" />
            <h1 className='font-bold text-center text-xl text-white '>Make An Appointment</h1>
            <hr className="border-b-2 border-yellow-600 w-20 ml-2" />
        </div>
        <form action="" className=''>
            <div className='flex justify-center'>
            <input type='date' id='date'  className='text-center w-[85%] bg-emerald-700 hover:bg-white hover:scale-105 rounded-lg p-1 mt-5'/>
            </div>
            <div className='time flex justify-evenly mt-4'>
                <button className='bg-emerald-700 hover:bg-white hover:scale-105 p-2 w-[40%] rounded-lg'>8:10-20:00</button>
                <button className='bg-emerald-700 hover:bg-white hover:scale-105 p-2 w-[40%] rounded-lg'>8:10-20:00</button>
            </div>
            <div className='time flex justify-evenly mt-4'>
                <button className='bg-emerald-700 hover:bg-white hover:scale-105 p-2 w-[40%] rounded-lg'>8:10-20:00</button>
                <button className='bg-emerald-700 hover:bg-white hover:scale-105 p-2 w-[40%] rounded-lg'>8:10-20:00</button>
            </div>
            <div className='flex justify-center mt-5'>
                <button className='bg-yellow-600 rounded-xl p-1.5 w-[60%]'>Make an Appointment</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Appointment
