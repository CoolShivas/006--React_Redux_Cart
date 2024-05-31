import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
