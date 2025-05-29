import shopLogo from "../../assets/shop-logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={shopLogo} alt="Shop Logo" className={styles.logo} />
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link to="/" className={styles.navButton}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link to="/shop" className={styles.navButton}>
                            Shop
                        </Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link to="/cart" className={styles.navButton}>
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
