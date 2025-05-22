import shopLogo from "../../assets/shop-logo.png";
import styles from "./Header.module.css";

function Header() {
    return (
        <>
            <img src={shopLogo} alt="Shop Logo" className={styles.logo} />
            <div>This is a header</div>
        </>
    );
}

export default Header;
