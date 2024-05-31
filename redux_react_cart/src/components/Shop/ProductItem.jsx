import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store";


const ProductItem = (props) => {

    const { idABC, titleABC, priceABC, descriptionABC } = props;

    const dispatch = useDispatch();

    const handlerOnAddToCart = () => {
        dispatch(cartActions.addItemsToCart({
            id: idABC,
            title: titleABC,
            price: priceABC,
            description: descriptionABC,
        }));
        console.log(cartActions.addItemsToCart({
            id: idABC,
            title: titleABC,
            price: priceABC,
            description: descriptionABC,
        }));// Here, we are getting the data on console screen after clicking on Add To Cart Btn ;
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{props.titleABC}</h3>
                    <div className={classes.price}>${props.priceABC.toFixed(2)}</div>
                </header>
                <p>{props.descriptionABC}</p>
                <div className={classes.actions}>
                    <button onClick={handlerOnAddToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
