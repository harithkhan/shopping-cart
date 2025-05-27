import { useState } from "react";
import { useEffect } from "react";
import styles from "./Shop.module.css";

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className={styles.shop}>
            {products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={styles.productImage}
                    />
                    <h3>{product.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Shop;
