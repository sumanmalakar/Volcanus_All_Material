import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../counterslice";
import productslice from "../productslice";

export const store = configureStore({
  reducer: {
   superman:counterslice,
   product:productslice
  },
});
