import React from 'react'
import District from './District'

const State_Government = ({money}) => {
  return (
    <div>
      <h1>State_Government</h1>
      <District money={money} />
    </div>
  );
}

export default State_Government