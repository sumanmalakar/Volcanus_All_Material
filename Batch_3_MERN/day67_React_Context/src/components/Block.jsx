import React from 'react'
import Panchayat from './Panchayat'
const Block = ({data}) => {
  return (
    <div>
      <h1>Block Component</h1>
      <Panchayat data={data} />
    </div>
  );
}

export default Block