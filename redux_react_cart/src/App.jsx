import { sendCartData } from "./store";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


let initialNotify = true;
// Here, preventing or stoping the error notification rendering first time ;


function App() {

  const showNotification = useSelector(store => store.userInterFace.notify);

  const dispatch = useDispatch();

  const showCart = useSelector((store) => store.userInterFace.cartIsVisible);

  const busket = useSelector((store) => store.cartBucket);
  // Here, store.cartBucket means we have selected the whole cart i.e, initialState: {items: [], totalQuantity: 0,}


  useEffect(() => {

    if (initialNotify) {
      initialNotify = false;
      return;
      // Here, error notification stop at first rendering cycle;
    }

    dispatch(sendCartData(busket));

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
