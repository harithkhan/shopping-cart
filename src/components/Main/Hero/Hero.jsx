import styles from "./Hero.module.css";
import phoneDog from "../../../assets/dog-hero-phone.png";
import defaultDog from "../../../assets/dog-hero-desktop.png";

function Hero() {
    return (
        <>
            <picture>
                <source srcSet={phoneDog} media="(max-width: 768px)" />
                <img src={defaultDog} alt="Responsive Dog" />
            </picture>
            <p>This is the hero section</p>
        </>
    );
}

export default Hero;
