import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10.2,
  count:999
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.count += 1;
    },
    decrement: (state) => {
      state.value -= 100;
    },
    incrementBy100 : (state) =>{
        state.value += 100,
        state.count -= 100
    }
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy100 } = counterSlice.actions;

export default counterSlice.reducer;
