import React from 'react'
import Janta from './Janta'

const Panchayat = ({data}) => {
  return (
    <div>
      <h1>Panchayat</h1>
      <Janta data={data} />
    </div>
  );
}

export default Panchayat