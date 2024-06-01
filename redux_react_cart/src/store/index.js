import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const reduxCartStore = configureStore({
  reducer: {
    userInterFace: uiSlice.reducer,
    cartBucket: cartSlice.reducer,
  },
});

export default reduxCartStore;
