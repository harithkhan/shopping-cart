import styles from "./AddToCart.module.css";

function AddToCart({ addToCart, product, quantity }) {
    const handleClick = () => {
        addToCart(product, quantity);
    };
    return (
        <button className={styles.cartButton} onClick={handleClick}>
            Add To Cart
        </button>
    );
}

export default AddToCart;
