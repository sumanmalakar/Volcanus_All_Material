import React, { useContext } from 'react'
import MoneyContext from '../context/MoneyContex'

const People = ({money}) => {
  console.log(useContext(MoneyContext))
  const { myMoney, counter, setCounter } = useContext(MoneyContext);
  return (
    <div>People {myMoney}
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Increase</button>
     </div>
  )
}

export default People