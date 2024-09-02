import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  count: 0,
  products: [{ id: 1, title: "iphone", price: 95000 }],
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (superman) => {
      superman.value += 10;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy100: (state) => {
      state.value += 100;
    },
    decrementBy100: (state) => {
      state.value -= 100;
    },
  },
});

export const { increment, decrement, incrementBy100, decrementBy100 } =
  counterSlice.actions;

export default counterSlice.reducer;
