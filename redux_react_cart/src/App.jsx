import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const showCart = useSelector((store) => store.userInterFace.cartIsVisible);

  const busket = useSelector((store) => store.cartBucket);
  // Here, store.cartBucket means we have selected the whole cart i.e, initialState: {items: [], totalQuantity: 0,}


  useEffect(() => {
    fetch(`https://reactreduxcart-a9eb0-default-rtdb.firebaseio.com/daliya.json`, {
      method: "PUT",
      body: JSON.stringify({
        busket
      }),
    })
  }, [busket]);
  // Here, we have use the method: "PUT", because the cart is dynamic if the user add more it will automatically updates whereas if we use post then the new item added;

  return (
    <>
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
