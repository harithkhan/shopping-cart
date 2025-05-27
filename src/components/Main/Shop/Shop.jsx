import { useState } from "react";
import { useEffect } from "react";
import styles from "./Shop.module.css";
import { Link } from "react-router-dom";

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
                <Link
                    to={`/shop/${product.id}`}
                    className={styles.link}
                    key={product.id}
                >
                    <div className={styles.productCard}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <h4 className={styles.productPrice}>
                            RM{product.price}
                        </h4>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Shop;
