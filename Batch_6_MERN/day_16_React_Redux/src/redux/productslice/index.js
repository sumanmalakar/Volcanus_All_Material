import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product:[{id:1,title:'iphone',price:100000}]
};

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    addProduct:(state) =>{
        const obj = {id:2,title:'sony experia',price:50000}
        state.product.push(obj)
    },
    removeProduct:(state) =>{
        const id = 1;
        state.product.filter((data)=>data.id != id)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct} = productSlice.actions;

export default productSlice.reducer;
