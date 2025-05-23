import Hero from "./Hero/Hero";
import Shop from "./Shop/Shop";
import { useParams } from "react-router-dom";

function Main() {
    const { name } = useParams();
    return <main>{name === "shop" ? <Shop /> : <Hero />}</main>;
}

export default Main;
