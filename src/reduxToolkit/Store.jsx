import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import searchReducer from "./ValueSlice"
export const store = configureStore({
    reducer: {
     cart:cartReducer,
     search:searchReducer
    },
  });
  