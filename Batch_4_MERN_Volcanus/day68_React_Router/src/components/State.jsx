import React from 'react'
import District from './District'

const State = ({money}) => {
  return (
    <div>
      <h1>This is state component</h1>
      <District money={money} />
    </div>
  );
}

export default State