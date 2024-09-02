import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  incrementBy100,
} from "./redux/CounterSlice";

import { addTodo,deleteTodo } from "./redux/TodoSlice";
const App = () => {
  const data = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>value = {data.value}</h1>
      <h1>count = {data.count}</h1>
      <h1>name = {data.name}</h1>
      <h1>product = {data.product[0].title}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementBy100())}>IncreaseBy100</button>
      <button onClick={() => dispatch(incrementByAmount(500))}>
        IncreaseByAmount
      </button>
      <button onClick={() => dispatch(addTodo({id:Math.random(),title:'ram',descrption:'i'}))}>
      AddTodo
      </button>
    </div>
  );
};

export default App;
