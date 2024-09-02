import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 12.3,
  count:10,
  product:[{id:1,title:'iphone',price:20000}],
  name:'superman'
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.count += 10
    },
    decrement: (state) => {
      state.value -= 1;
      state.count -= 10;
    },
    incrementBy100 : (state) =>{
     state.value += 100;
     state.count += 100;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.count += action.payload

    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,incrementBy100} = counterSlice.actions;

export default counterSlice.reducer;
