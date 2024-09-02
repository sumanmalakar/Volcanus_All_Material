import React from "react";
import Hero from './Hero'

const Person = (props) => {
  
  return (
    <div style={{backgroundColor:"green",
      padding:'10px',
      margin:'20px'
    }}
     className="superman">
      <h1>{props.name}</h1>
      <h2>{props.imdb}</h2>
      <h3>{props.relase}</h3>
      <h3>{props.actor}</h3>
      <Hero />
    </div>
  );
};

export default Person;
