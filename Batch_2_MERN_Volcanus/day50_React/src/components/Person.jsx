import React from 'react'

const Person = (props) => {
    const person ={
        name:"supeman",
        age:"400",
        salary:"1000$",
        car:"BMW"
    }
  return (
    <div className='person'>
        <h1>This person component</h1>
        <h3>{props.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.salary}</h3>
        <h3>{person.car}</h3>
    </div>
  )
}

export default Person