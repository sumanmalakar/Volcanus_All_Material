import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy100 } from "./redux/counterslice";

export function Counter() {
  const count = useSelector((state) => state.superman.value);
  const dispatch = useDispatch();

  return (
    <div>
        <h1>{count}</h1>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button onClick={()=>dispatch(incrementBy100())}>IncrementBy100</button>
      </div>
    </div>
  );
}
