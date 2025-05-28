import { useState } from "react";
import styles from "./QuantitySelector.module.css";

function QuantitySelector() {
    const [quantity, setQuantity] = useState(1);
    const increase = () => setQuantity((quantity) => quantity + 1);
    const decrease = () => setQuantity((quantity) => Math.max(1, quantity - 1));
    return (
        <div className={styles.QuantitySelector}>
            <button onClick={decrease}>-</button>
            <p>{quantity}</p>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantitySelector;
