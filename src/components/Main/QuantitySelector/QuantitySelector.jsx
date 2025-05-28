import styles from "./QuantitySelector.module.css";

function QuantitySelector({ quantity, setQuantity }) {
    const increase = () => setQuantity((quantity) => quantity + 1);
    const decrease = () => setQuantity((quantity) => Math.max(1, quantity - 1));
    return (
        <div className={styles.QuantitySelector}>
            <button onClick={decrease} className={styles.quantityButton}>
                -
            </button>
            <p>{quantity}</p>
            <button onClick={increase} className={styles.quantityButton}>
                +
            </button>
        </div>
    );
}

export default QuantitySelector;
