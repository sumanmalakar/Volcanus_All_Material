import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice:10
  },
  reducers: {
    addToCart: (state, action) => {
      let newItem = action.payload;
      state.items.push(newItem)
    },
    removeSpecificItem:(state,action)=>{
       const id = action.payload;
       state.items = state.items.filter((item) => item.id !== id);
        // state.items.push((state.items.filter((data)=>data.id != id)))
    }
  },
});

export const itemsInCart = (state) =>state.cart.items

export const { addToCart, removeSpecificItem } = cartSlice.actions;

export default cartSlice.reducer;
