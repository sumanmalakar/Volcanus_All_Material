import React from 'react'
import District from './DistrictGov'

const StateGov = ({money}) => {
  return (
    <div>
      <h1>This is StateGov Component</h1>
      <District money={money} />
    </div>
  );
}

export default StateGov