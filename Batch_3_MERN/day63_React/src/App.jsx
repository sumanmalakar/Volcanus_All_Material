import React, { useState } from 'react'
import Superman from './Superman'

const App = () => {
  const universe = "marvel"
  const [data, setData] = useState("100")
  const [add, setAdd] = useState("Vijay Nagar Indore")

const changeData = (name,add) =>{
  setData(name)
  setAdd(add)
  
}

  return (
    <div>
      <h1>ye hai parent = {data}</h1>
      <h2>Parent address = {add}</h2>
      <Superman superman={universe} ram={changeData} />
    </div>
  )
}

export default App