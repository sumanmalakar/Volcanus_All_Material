import React from 'react'
import StateGov from './StateGov'

const IndianGov = ({money}) => {
  return (
    <div>
      <h1>This is IndianGov Component</h1>
      <StateGov money={money} />
    </div>
  );
}

export default IndianGov