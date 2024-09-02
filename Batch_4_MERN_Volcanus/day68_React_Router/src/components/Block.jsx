import React from 'react'
import People from './People'

const Block = ({money}) => {
  return (
    <div>
      <h1>This is Block Components</h1>
      <People money={money} />
    </div>
  );
}

export default Block