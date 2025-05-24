import styles from "./Hero.module.css";
import phoneDog from "../../../assets/dog-hero-phone.png";
import defaultDog from "../../../assets/dog-hero-desktop.png";
import ShopButton from "../ShopButton/ShopButton";

function Hero() {
    return (
        <>
            <picture className={styles.heroPicture}>
                <source srcSet={phoneDog} media="(max-width: 768px)" />
                <img src={defaultDog} alt="Responsive Dog" />
            </picture>
            <ShopButton />
        </>
    );
}

export default Hero;
