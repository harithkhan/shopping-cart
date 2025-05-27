import Hero from "./Hero/Hero";
import Shop from "./Shop/Shop";
import { useParams } from "react-router-dom";
import Product from "./Product/Product";

function Main() {
    const { name } = useParams();
    return (
        <main>
            {name === "shop" ? (
                <Shop />
            ) : name === "/shop/1" ? (
                <Product index="1" />
            ) : (
                <Hero />
            )}
        </main>
    );
}

export default Main;
