import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../CounterSlice";
import cartSlice from '../CartSlice'
import TodoSlice from "../TodoSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    cart:cartSlice,
    todo : TodoSlice
  
  },
});
