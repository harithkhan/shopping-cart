import Hero from "./Hero/Hero";
import Shop from "./Shop/Shop";
import { useParams } from "react-router-dom";

function Main() {
    const { name } = useParams();
    return (
        <>
            {name === "shop" ? (
                <Shop />
            ): (
                <Hero />
            )}
        </>
    )
}

export default Main;
