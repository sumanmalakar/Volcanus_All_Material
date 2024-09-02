import React from 'react'
import Block from './Block'

const District = ({data}) => {
  return (
    <div>
      <h1>District Component</h1>
      <Block data={data} />
    </div>
  );
}

export default District