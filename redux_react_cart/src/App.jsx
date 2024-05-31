import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import { useSelector } from "react-redux";

function App() {

  const showCart = useSelector((store) => store.userInterFace.cartIsVisible);

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
