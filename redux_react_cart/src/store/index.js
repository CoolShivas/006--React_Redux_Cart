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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemsToCart(state, action) {
      const newProduct = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newProduct.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newProduct.id,
          price: newProduct.price,
          quantity: 1,
          totalPrice: newProduct.price,
          name: newProduct.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newProduct.price;
      }
    },
    removeItemsFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

const reduxCartStore = configureStore({
  reducer: {
    userInterFace: uiSlice.reducer,
    cartBucket: cartSlice.reducer,
  },
});

export const uiActions = uiSlice.actions;

export const cartActions = cartSlice.actions;

export default reduxCartStore;
