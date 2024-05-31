import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store';

const CartButton = (props) => {

    const dispatch = useDispatch();

    const handlerOnCartVisible = () => {
        dispatch(uiActions.togglingUi());
    };

    return (
        <button className={classes.button} onClick={handlerOnCartVisible}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
