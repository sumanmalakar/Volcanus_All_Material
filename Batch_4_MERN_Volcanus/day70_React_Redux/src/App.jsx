import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementBy100,
  decrementBy100,
} from './redux/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter = {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increase By 1</button>
      <button onClick={()=>dispatch(incrementBy100())}>Increase By 100</button>
      <button onClick={()=>dispatch(decrement())}>deCrease By 1</button>
      <button onClick={()=>dispatch(decrementBy100())}>deCrease By 100</button>
    </div>
  )
}

export default App