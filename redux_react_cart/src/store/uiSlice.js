import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "userinterface",
  initialState: {
    cartIsVisible: false,
    notify: null,
  },
  reducers: {
    togglingUi: (state, action) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotify: (state, action) => {
      state.notify = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
