import styles from "./CartPage.module.css";

function CartPage({ cart }) {
    console.log(cart);
    return (
        <div className={styles.cartContainer}>
            <p>This is just a test cart.</p>
        </div>
    );
}

export default CartPage;
