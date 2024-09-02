import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice";

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    // cart:createSlice,
    // product:productSlice,
    // student:studentSlice,
  },
});
