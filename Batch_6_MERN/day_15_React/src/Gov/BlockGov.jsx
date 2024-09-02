import React from 'react'
import Panchayat from './Panchayat'

const BlockGov = ({money}) => {
  return (
    <div>
      <h1>This is Block Component</h1>
      <Panchayat money={money} />
    </div>
  );
}

export default BlockGov