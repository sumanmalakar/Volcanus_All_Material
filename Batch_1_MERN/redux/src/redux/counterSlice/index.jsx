import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSuperman",
  initialState:100,
  reducers: {
    increaseBy1:(state)=> state+1,
    descreaseBy1:(state)=>state-1,
    increaseBy10:(state)=>state+10,
    descreaseBy10:(state)=>state-10
  },
});


export const { increaseBy1, descreaseBy1,increaseBy10,descreaseBy10} = counterSlice.actions;

export default counterSlice.reducer;
