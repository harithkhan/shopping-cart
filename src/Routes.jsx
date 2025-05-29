import App from "./App";
import Shop from "./components/Main/Shop/Shop";
import Product from "./components/Main/Product/Product";
import Hero from "./components/Main/Hero/Hero";
import CartPage from "./components/Main/CartPage/CartPage";

const routes = [
    {
        path: "/",
        element: (
            <App>
                <Hero />
            </App>
        ),
    },
    {
        path: "/shop",
        element: (
            <App>
                <Shop />
            </App>
        ),
    },
    {
        path: "/shop/:id",
        element: (
            <App>
                <Product />
            </App>
        ),
    },
    {
        path: "/cart",
        element: (
            <App>
                <CartPage />
            </App>
        ),
    },
];

export default routes;
