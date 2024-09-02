import React from 'react'
import Block from './BlockGov'

const DistrictGov = ({money}) => {
  return (
    <div>
      <h1>This is District Component = {money}</h1>
      <Block money={money}  />
    </div>
  );
}

export default DistrictGov