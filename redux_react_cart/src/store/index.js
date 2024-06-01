import { configureStore, createSlice } from "@reduxjs/toolkit";

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
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCartData = (busket) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotify({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data! ",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        `https://reactreduxcart-a9eb0-default-rtdb.firebaseio.com/daliya.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            busket,
          }),
        }
      );
      // Here, if there will we any error while connecting to server. We will catch the error;
      if (!response.ok) {
        throw new Error("Sending cart data is failed.");
      }
    };
    try {
      await sendRequest();
      // Here, if there will we no error while connecting to server. We will get the successful notification;
      dispatch(
        uiActions.showNotify({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotify({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

const reduxCartStore = configureStore({
  reducer: {
    userInterFace: uiSlice.reducer,
    cartBucket: cartSlice.reducer,
  },
});

export const uiActions = uiSlice.actions;

export const cartActions = cartSlice.actions;

export default reduxCartStore;
