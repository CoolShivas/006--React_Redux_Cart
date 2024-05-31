import { useDispatch } from "react-redux";
import classes from "./CartItems.module.css";
import { cartActions } from "../../store";

const CartItems = (props) => {

    const dispatch = useDispatch();

    const { id, title, quantity, total, price } = props.itemProduct;

    const handlerOnIncreaseQuantity = () => {
        dispatch(cartActions.addItemsToCart({
            id,
            title,
            price
        }));
    };

    const handlerOnDecreaseQuantity = () => {
        dispatch(cartActions.removeItemsFromCart(id));
    };


    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={handlerOnDecreaseQuantity}> - </button>
                    <button onClick={handlerOnIncreaseQuantity}> + </button>
                </div>
            </div>
        </li>
    );
};

export default CartItems;
