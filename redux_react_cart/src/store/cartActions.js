import { uiActions } from "./uiSlice";

const sendCartData = (busket) => {
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

export default sendCartData;
