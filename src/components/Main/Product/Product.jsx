import { useEffect } from "react";
import { useState } from "react";
import styles from "./Product.module.css";

function Product({ index }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProduct(data[index]))
            .catch((err) => console.error("Error fetching products:", err));
    }, [index]);

    return (
        <div className={styles.productContainer}>
            <div className={styles.productImageContainer}>
                <img src={product.image} />
            </div>
        </div>
    )
}

export default Product;
