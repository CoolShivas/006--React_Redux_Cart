import ProductItem from './ProductItem';
import classes from "./Products.module.css";


const DUMMY_PRODUCTS = [
    {
        id: "p1",
        price: 6,
        title: "My First Book",
        description: "The first book I ever wrote"
    },
    {
        id: "p2",
        price: 4,
        title: "My Second Book",
        description: "The second book I ever wrote"
    },
    {
        id: "p3",
        price: 8,
        title: "My Third Book",
        description: "The third book I ever wrote"
    }
];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((currElem) => {
                    return <ProductItem
                        key={currElem.id}
                        idABC={currElem.id}
                        priceABC={currElem.price}
                        titleABC={currElem.title}
                        descriptionABC={currElem.description}
                    ></ProductItem>
                })}
                {/* <ProductItem
                    title='Test'
                    price={6}
                    description='This is a first product - amazing!'
                /> */}
            </ul>
        </section>
    );
};

export default Products;
