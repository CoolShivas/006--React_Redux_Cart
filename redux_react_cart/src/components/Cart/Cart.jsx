import CartItems from "./CartItems";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = (props) => {

    const cartProducts = useSelector((store) => store.cartBucket.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {/* <CartItems
                    item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
                /> */}

                {cartProducts.map((currItem) => {
                    return <CartItems key={currItem.id}
                        item={{ title: currItem.name, quantity: currItem.quantity, total: currItem.totalPrice, price: currItem.price }}
                    ></CartItems>
                })}
                {/* Here, we are getting the title: currItem.name, quantity: currItem.quantity, total: currItem.totalPrice from the reducers fucntion from addItemsToCart */}

            </ul>
        </Card>
    );
};

export default Cart;
