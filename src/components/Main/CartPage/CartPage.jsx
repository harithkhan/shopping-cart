import styles from "./CartPage.module.css";

function CartPage({ cart }) {
    const subtotal = Object.values(cart).reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
    }, 0);

    const discountRate = 0.15;
    const discount = subtotal * discountRate;
    const delivery = 10;
    const total = subtotal - discount + delivery;

    return (
        <div className={styles.cartPage}>
            <div className={styles.cartContainer}>
                <h2 className={styles.cartHeader}>Your Cart</h2>
                {Object.entries(cart).map(([id, item]) => (
                    <div key={id} className={styles.cartItems}>
                        <img
                            src={item.product.image}
                            alt={item.product.title}
                            className={styles.productImage}
                        />
                        <p>{item.product.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: RM{item.product.price}</p>
                    </div>
                ))}
            </div>
            <div className={styles.summaryContainere}>
                <h3 className={styles.summaryHeader}>Your Summary</h3>
                <p className={styles.subTotal}>Subtotal: RM{subtotal}</p>
                <p className={styles.discount}>Discount: 15%</p>
                <p className={styles.deliveryFees}>Delivery Fees: RM10</p>
                <p className={styles.total}>Total: RM{total}</p>
            </div>
        </div>
    );
}

export default CartPage;
