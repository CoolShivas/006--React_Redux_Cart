import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store";

function App() {

  const showNotification = useSelector(store => store.userInterFace.notify);

  const dispatch = useDispatch();

  const showCart = useSelector((store) => store.userInterFace.cartIsVisible);

  const busket = useSelector((store) => store.cartBucket);
  // Here, store.cartBucket means we have selected the whole cart i.e, initialState: {items: [], totalQuantity: 0,}


  useEffect(() => {
    const sendCartData = async () => {
      // Here, we have use notification as loader while sending the request to server;
      dispatch(uiActions.showNotify({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data! ",
      }));

      let response = await fetch(`https://reactreduxcart-a9eb0-default-rtdb.firebaseio.com/daliya.json`, {
        method: "PUT",
        body: JSON.stringify({
          busket
        }),
      })
      // Here, if there will we any error while connecting to server. We will catch the error;
      if (!response.ok) {
        throw new Error("Sending cart data is failed.")
      }
      // Here, if there will we no error while connecting to server. We will get the successful notification;
      dispatch(uiActions.showNotify({
        status: "success",
        title: "Success",
        message: "Sent cart data successfully",
      }));

    };
    // Here, catching the overall error;
    sendCartData().catch(() => {
      dispatch(uiActions.showNotify({
        status: "error",
        title: "Error",
        message: "Sending cart data failed",
      }));
    })

  }, [busket, dispatch]);
  // Here, we have use the method: "PUT", because the cart is dynamic if the user add more it will automatically updates whereas if we use post then the new item added;

  return (
    <>
      {showNotification && <Notification
        status={showNotification.status}
        title={showNotification.title}
        message={showNotification.message}
      ></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
