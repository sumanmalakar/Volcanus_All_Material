/* eslint-disable no-unused-vars */
import React from 'react'
import PhoneNumberQRCode from './PhoneNumberQRCode'; 
const QRCode = () => {
  const phoneNumber = '+91 9893785834';
  const paytmNumber = '+91 74156-64456';
  const phonePeNumber = '+91 74156-64456';
  const googlePayNumber = '+91 74156-64456';

  // Bank information
  const bankName = 'ICICI BANK';
  const ifscCode = 'ICIC000094';
  const accountHolderName = 'Mr. Pranay Gupta';
  const accountNumber = '09450500070';
  const accountType = 'Current Account';
return (
    <>
    <div className=' flex items-center justify-center p-4 mt-4 '>
      <hr className="border-b-2 border-yellow-600 w-[30%] mr-2" />
      <h1 className='font- text-white text-center text-xl text-white'> PAYMENT ONLINE</h1>
      <hr className="border-b-2 border-yellow-600 w-[30%]  text-white ml-2" />
      </div>
    <div className="payment_container" data-aos="flip-down">
      <div className="whitebox w-[96%] m-auto text-black rounded p-6">
        <div className="payment-numbers-container">
          <div className="payment-number flex mb-4">
            <h3 className='font- text-white'>Paytm Number:</h3>
            <p className=' text-white ml-10'>{paytmNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font- text-white'>Phone Pe Number:</h3>
            <p className=' text-white ml-5'>{phonePeNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font- text-white'>Google Pay Number:</h3>
            <p className=' text-white ml-3'>{googlePayNumber}</p>
          </div>
        </div>

        <div className="bank-account-info-container mt-6 text-left">
          <h2 className='font- text-white text-xl mb-3'>Bank Account Information</h2>
          <ul>
            <li className='text-white ml-3' ><strong>Bank Name:</strong><span className='m-'> {bankName}</span></li>
            <li className='text-white ml-3'><strong>IFSC code:</strong><span className='m-1'> {ifscCode}</span></li>
            <li className='text-white ml-3'><strong>Account Holder Name:</strong> <span className='m-'>{accountHolderName}</span></li>
            <li className='text-white ml-3'><strong>Account Number:</strong> <span className='m-'>{accountNumber}</span></li>
            <li className='text-white ml-3'><strong>Account Type:</strong> <span className='m-'>{accountType}</span></li>
          </ul>
        </div>

        <div className='mt-5 m-auto'>
          <PhoneNumberQRCode phoneNumber={phoneNumber}/>
        </div>
      </div>
    </div>

    
    </>
  )
}

export default QRCode
