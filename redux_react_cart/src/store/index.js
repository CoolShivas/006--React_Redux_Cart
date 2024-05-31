import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "userinterface",
  initialState: { cartIsVisible: false },
  reducers: {
    togglingUi: (state, action) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const reduxCartStore = configureStore({
  reducer: {
    userInterFace: uiSlice.reducer,
  },
});

export const uiActions = uiSlice.actions;

export default reduxCartStore;
