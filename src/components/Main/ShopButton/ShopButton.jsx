import styles from "./ShopButton.module.css";
import { Link } from "react-router-dom";

function ShopButton() {
    return (
        <button className={styles.shopButton}>
            <Link to="/shop" className={styles.shopButtonLink}>
                Shop Now
            </Link>
        </button>
    );
}

export default ShopButton;
