import Card from "../UI/Card";
import classes from "./ProductItem.module.css";


const ProductItem = (props) => {

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{props.titleABC}</h3>
                    <div className={classes.price}>${props.priceABC.toFixed(2)}</div>
                </header>
                <p>{props.descriptionABC}</p>
                <div className={classes.actions}>
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
