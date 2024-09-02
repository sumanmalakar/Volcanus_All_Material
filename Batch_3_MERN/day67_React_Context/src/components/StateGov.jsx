import React from 'react'
import District from './District'

const StateGov = ({data}) => {
  return (
    <div>
      <h1>StateGov Component</h1>
      <District data={data} />
    </div>
  );
}

export default StateGov