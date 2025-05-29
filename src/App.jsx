import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import React from "react";

function App({ children }) {
    const [cart, setCart] = useState({});

    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existing = prevCart[product.id];
            return {
                ...prevCart,
                [product.id]: {
                    product,
                    quantity: existing
                        ? existing.quantity + quantity
                        : quantity,
                },
            };
        });
    };

    return (
        <>
            <Header />
            <main>{React.cloneElement(children, { cart, addToCart })}</main>
        </>
    );
}

export default App;
